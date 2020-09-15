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

// create a conversation and display
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
      <span>Creating a new conversation</span>
    </div>
  );
}
