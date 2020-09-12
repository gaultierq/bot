import React from 'react';
import { useGetBotQuery } from '@web/graphql';
import { useHistory, RouteComponentProps } from 'react-router-dom';
import BotForm from './BotForm';
import NotFound from '../Error/404';

type TParams = { id: string };

export default function BotEdit({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const { data, loading, error } = useGetBotQuery({
    variables: {
      input: { id }
    },
  });

  const bot = data?.getBot?.bot;

  const history = useHistory();

  // const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
  //   variables: {
  //     input: { title: bot.title }
  //   }
  // });


  const onSubmit = React.useCallback(e => {
    console.info('submiting bot creation');
    e.preventDefault();
    // (async () => {
    //   await createBotMutation();
    //   history.push(Routes.BOT_LIST);
    // })();
  }, [history]);


  if (!bot) return <NotFound />;

  return (
    <BotForm bot={bot} onSubmit={onSubmit} />
  );
}
