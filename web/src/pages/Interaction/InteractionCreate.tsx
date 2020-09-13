import React from 'react';
import { useCreateInteractionMutation } from '@web/graphql';
import { useHistory } from 'react-router-dom';
import { Routes } from '@web/constants';
import InteractionForm from './InteractionForm';

export default function InteractionCreate() {
  const [interaction] = React.useState({
    content: ''
  });
  const history = useHistory();

  const [createInteractionMutation, { data, loading, error }] = useCreateInteractionMutation();

  const onSubmit = React.useCallback(
    async interactionParam => {
      console.info('submiting interaction creation');
      await createInteractionMutation({
        variables: {
          input: interactionParam
        }
      });
      history.push(Routes.INTERACTION_LIST);
    },
    [loading, createInteractionMutation, history]
  );

  return <InteractionForm interaction={interaction} onSubmit={onSubmit} />;
}
