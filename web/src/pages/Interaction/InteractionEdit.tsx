import React from 'react';
import { Interaction, useEditInteractionMutation, useGetInteractionQuery } from '@web/graphql';
import { RouteComponentProps, useHistory } from 'react-router-dom';
import { Routes } from '@web/constants';
import InteractionForm from './InteractionForm';
import NotFound from '../Error/404';
import { DeleteInteractionButton } from './components/InteractionDeleteButton';
import Loader from '../../layout/Loader';

type TParams = {
  id: string;
};

export default function InteractionEdit({ match }: RouteComponentProps<TParams>) {
  // thats really not good, but still making progress on ts
  const id = match.params.id;
  const { data: queryData, loading: queryLoading, error: queryError } = useGetInteractionQuery({
    variables: { input: { id } }
  });

  const history = useHistory();

  const [editInteractionMutation, { data, loading, error }] = useEditInteractionMutation();

  const onSubmit = React.useCallback(
    async interactionParam => {
      console.info('submiting interaction creation');
      await editInteractionMutation({
        variables: {
          input: { ...interactionParam, id }
        }
      });
    },
    [editInteractionMutation, history]
  );

  if (loading) return <Loader />;
  if (!queryData) return <NotFound />;

  const interaction = queryData?.getInteraction.interaction as Interaction;
  console.debug('fetched interaction:', { interaction });

  return (
    <div>
      <InteractionForm interaction={interaction} onSubmit={onSubmit} />
      <DeleteInteractionButton interaction={interaction} />
    </div>
  );
}
