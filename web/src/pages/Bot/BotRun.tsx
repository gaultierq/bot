import React from 'react';
import { Bot, useGetBotQuery } from '@web/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { Message } from './components/Message';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useTextField } from '@web/utils';

type TParams = {
  id: string;
};

type IMessage = {
  content: string,
  key: string,
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


export default function BotRun({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const { data: queryData, loading: queryLoading, error: queryError } = useGetBotQuery({
    variables: { input: { id } }
  });

  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [answer, setAnswer, setAnswerState] = useTextField('');
  const classes = useStyles();

  const bot = queryData?.getBot.bot as Bot;
  console.debug('fetched bot:', { bot });


  return (
    <div>
      <span>Hello this is the bot running</span>
      <ul>
        {messages.map(i => <Message key={i.key} content={ i.content } />)}
      </ul>
      <form
        className={classes.root}
        noValidate
        autoComplete={'off'}
        onSubmit={event => {
          event.preventDefault();
          console.debug('event', { event });
          const newMessages: IMessage[] = [...messages, {
            content: answer,
            key: `fake-id-${messages.length + 1}`
          }];
          setMessages(newMessages);
          setAnswerState('');
        }}
      >
        <TextField id={'standard-basic'} label={'répondre'} value={answer} onChange={setAnswer} />
        <div className='form-group my-4'>
          <button className='btn btn-block' type='submit'>
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
