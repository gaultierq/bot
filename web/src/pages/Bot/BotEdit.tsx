import React from 'react'
import { Bot, useEditBotMutation, useGetBotQuery } from '@web/graphql'
import { RouteComponentProps, useHistory } from 'react-router-dom'
import BotForm from './BotForm'
import NotFound from '../Error/404'
import { DeleteBotButton } from './components/BotDeleteButton'
import Loader from '../../layout/Loader'
import { InteractionList } from '@web/pages'
import { StartBotButton } from './components/StartConversation'

type TParams = {
  id: string;
};

export default function BotEdit({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const { data: queryData, loading: queryLoading, error: queryError } = useGetBotQuery({
    variables: { input: { id } }
  });

  const history = useHistory();

  const [editBotMutation, { data, loading, error }] = useEditBotMutation();

  const onSubmit = React.useCallback(
    async botParam => {
      console.info('submiting bot creation');
      await editBotMutation({
        variables: {
          input: { ...botParam, id }
        }
      });
    },
    [editBotMutation, history]
  );

  if (loading) return <Loader />;
  if (!queryData?.getBot.bot) return <NotFound />;

  const bot = queryData?.getBot.bot as Bot;
  console.debug('fetched bot:', { bot });

  return (
    <div>
      <StartBotButton botId={id} />
      <BotForm bot={bot} onSubmit={onSubmit} />
      <InteractionList botId={bot.id} />
      <DeleteBotButton bot={bot} />
    </div>
  );
}

