import React from 'react';
import { useCreateAnswerMutation, useGetConversationQuery, useNextInteractionQuery } from '@web/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { Message } from './components/Message';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTextField } from '@web/utils';
import NotFound from '../Error/404';
import _ from 'lodash';

type TParams = {
  id: string;
};

type IMessage = {
  content: string;
  key: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    }
  })
);

const hashCode = str => {
  let hash = 0,
    i,
    chr;
  for (i = 0; i < _.size(str); i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

type Created = { interaction: any; answers: any[]; key: string };
const groupAnswers = answers => {
  // item = { interactionId, answers }
  const result = [] as Created[];

  // const intByAns = {};
  if (answers) {
    let lastii;
    answers.forEach(answer => {
      const interaction = answer.interaction;
      const ii = interaction.id;
      if (ii !== lastii) {
        result.push({ interaction, answers: [], key: interaction.id });
      }
      lastii = ii;
      const last = _.last(result);
      last.answers.push(answer);
      last.key = hashCode(last.key + answer.id);
    });
  }
  return result;
};

function Salut(props: {
  classes: any;
  onSubmit: (event) => Promise<void>;
  currentInteraction: any;
  value: any;
  onChange: any;
}) {
  return (
    <form className={props.classes.root} noValidate autoComplete={'off'} onSubmit={props.onSubmit}>
      <TextField
        disabled={!props.currentInteraction}
        id={'standard-basic'}
        label={'répondre'}
        value={props.value}
        onChange={props.onChange}
      />
      <div className='form-group my-4'>
        <button className='btn btn-block' type='submit'>
          Envoyer
        </button>
      </div>
    </form>
  );
}

export default function ConversationShow({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;

  const classes = useStyles();

  const { data: queryData, loading: queryLoading, error: queryError } = useGetConversationQuery({
    variables: { input: { id } }
  });
  const conversation = queryData?.getConversation?.conversation;
  const currentInteraction = queryData?.getConversation?.nextInteraction;

  // answers
  const [answer, setAnswer, setAnswerState] = useTextField('');
  const [
    createAnswerMutation,
    { data: answerData, loading: answerLoading, error: answerError }
  ] = useCreateAnswerMutation();

  if (!conversation) return <NotFound />;
  const answers = conversation.answers;
  const grouped = groupAnswers(answers);

  const onSubmit = async event => {
    event.preventDefault();
    console.debug('event', { event });
    if (currentInteraction) {
      const result = await createAnswerMutation({
        variables: {
          input: { conversationId: id, content: answer, interactionId: currentInteraction.id }
        },
        refetchQueries: ['getConversation']
      });
    }
    // setMessages(newMessages);
    setAnswerState('');
  };
  return (
    <div>
      <span>Hello this is the bot running</span>
      <ul>
        {grouped.map(({ interaction, answers, key }, n) => (
          <div key={key}>
            <div>{interaction.content + ' (id=' + interaction.id + ')'}</div>
            {answers.map(a => (
              <Message key={a.id} content={a.content} />
            ))}
          </div>
        ))}
        {currentInteraction && <div>{currentInteraction.content}</div>}
      </ul>

      {currentInteraction && (
        <Salut
          classes={classes}
          onSubmit={onSubmit}
          currentInteraction={currentInteraction}
          value={answer}
          onChange={setAnswer}
        />
      )}
      {!currentInteraction && <div>Thanks for using this bot</div>}
    </div>
  );
}
