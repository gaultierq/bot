import React from 'react';
import { useCreateBotMutation } from '@web/graphql';
import { useHistory } from 'react-router-dom';
import { Routes } from '@web/constants';
import BotForm from './BotForm';

export default function BotCreate() {
  const [bot] = React.useState({
    title: '',
  });
  const history = useHistory();

  const [createBotMutation, { data, loading, error }] = useCreateBotMutation();

  const onSubmit = React.useCallback(async botParam => {
    console.info('submiting bot creation');
    await createBotMutation({
      variables: {
        input: botParam
      }
    });
    history.push(Routes.BOT_LIST);
  }, [loading, createBotMutation, history]);

  return (
    <BotForm bot={bot} onSubmit={onSubmit} />
  );
}
