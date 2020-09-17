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

const hashCode = (str) => {
  let hash = 0, i, chr;
  for (i = 0; i < _.size(str); i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
}

type Created = { interaction: any, answers: any[], key: string };
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
export default function ConversationShow({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const { data: queryData, loading: queryLoading, error: queryError } = useGetConversationQuery({
    variables: { input: { id } }
  });

  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [answer, setAnswer, setAnswerState] = useTextField('');
  const conversation = queryData?.getConversation?.conversation;
  console.debug('Conversation retrieved:', { conversation });

  const { data: nextInteractionData, loading, error } = useNextInteractionQuery({
    variables: {
      input: { conversationId: id }
    }
  });

  console.debug('next interaction query data:', { nextInteractionData, loading, error });

  // messages = answers à droite, et leurs interactions au dessus
  // + nextInteraction

  const classes = useStyles();

  const currentInteraction = nextInteractionData?.nextInteraction?.interaction;

  const [
    createAnswerMutation,
    { data: answerData, loading: answerLoading, error: answerError }
  ] = useCreateAnswerMutation();

  if (!conversation) return <NotFound />;
  const answers = conversation.answers;
  const grouped = groupAnswers(answers);


  return (
    <div>
      <span>Hello this is the bot running</span>
      <ul>
        {grouped.map(({ interaction, answers,key }, n) => (
          <div key={key}>
            <div>{interaction.content + ' (id=' + interaction.id + ')'}</div>
            {
              answers.map(a => <Message key={a.id} content={a.content} />)
            }
          </div>
        ))}
        {currentInteraction && <div>{currentInteraction.content}</div>}
      </ul>
      <form
        className={classes.root}
        noValidate
        autoComplete={'off'}
        onSubmit={async event => {
          event.preventDefault();
          console.debug('event', { event });

          // const newMessages: IMessage[] = [
          //   ...messages,
          //   {
          //     content: answer,
          //     key: `fake-id-${messages.length + 1}`
          //   }
          // ];
          if (currentInteraction) {
            const result = await createAnswerMutation({
              variables: {
                input: { conversationId: id, content: answer, interactionId: currentInteraction.id },
              },
            });
          }
          // setMessages(newMessages);
          setAnswerState('');
        }}
      >
        <TextField
          disabled={!currentInteraction}
          id={'standard-basic'}
          label={'répondre'}
          value={answer}
          onChange={setAnswer}
        />
        <div className='form-group my-4'>
          <button className='btn btn-block' type='submit'>
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
