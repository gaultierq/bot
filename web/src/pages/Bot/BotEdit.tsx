import React from 'react';
import { useCreateBotMutation, useEditBotMutation, useGetBotQuery } from '@web/graphql';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { Routes } from '@web/constants';
import BotForm from './BotForm';
import NotFound from "../Error/404";

type TParams = {
  id: string
};

export default function BotEdit({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const { data: queryData, loading: queryLoading, error: queryError } = useGetBotQuery({ variables: { input: { id } } });
  const bot = queryData?.getBot.bot;

  const history = useHistory();

  const [editBotMutation, { data, loading, error }] = useEditBotMutation();

  const onSubmit = React.useCallback(async botParam => {
    console.info('submiting bot creation');
    await editBotMutation({
      variables: {
        input: botParam
      }
    });
    history.push(Routes.BOT_LIST);
  }, [editBotMutation, history]);

  if (!bot) return <NotFound />
  return (
    <BotForm bot={bot} onSubmit={onSubmit} />
  );
}
