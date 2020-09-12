import React from 'react';
import { useCreateBotMutation } from '@web/graphql';
import { useHistory } from 'react-router-dom';
import { Routes } from '@web/constants';
import BotForm from './BotForm';

export default function BotCreate() {
  // thats really not good, but still making progress on ts
  const [bot] = React.useState({
    id: '',
    published: false,
    title: '',
    image: null,
  });

  const history = useHistory();

  const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
    variables: {
      input: { title: bot.title }
    }
  });

  const onSubmit = React.useCallback(e => {
    console.info('submiting bot creation');
    e.preventDefault();
    if (loading) return;
    (async () => {
      await createBotMutation();
      history.push(Routes.BOT_LIST);
    })();
  }, [loading, createBotMutation, history]);

  return (
    <BotForm bot={bot} onSubmit={onSubmit} />
  );
}
