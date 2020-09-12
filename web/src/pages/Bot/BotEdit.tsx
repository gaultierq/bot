import React from 'react';
import {Bot, useEditBotMutation, useGetBotQuery} from '@web/graphql';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import {Routes} from '@web/constants';
import BotForm from './BotForm';
import NotFound from '../Error/404';
import {DeleteBotButton} from "./components/BotDeleteButton";
import Loader from "../../layout/Loader";

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
          input: botParam
        }
      });
      history.push(Routes.BOT_LIST);
    },
    [editBotMutation, history]
  );

  if (loading) return <Loader />;
  if (!queryData) return <NotFound />;

  const bot = queryData?.getBot.bot as Bot;

  return (
    <div>
      <BotForm bot={bot} onSubmit={onSubmit} />
      <DeleteBotButton bot={bot} />
    </div>
  );
}
