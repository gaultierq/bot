import React from 'react';
import {useCreateInteractionMutation} from '@web/graphql';
import {RouteComponentProps, useHistory} from 'react-router-dom';
import InteractionForm from './InteractionForm';

type TParams = {
  botId: string;
};

export default function InteractionCreate({ match }: RouteComponentProps<TParams>) {
  const botId = match.params.botId;
  const [interaction] = React.useState({
    content: '',
    botId
  });
  const history = useHistory();

  const [createInteractionMutation, { data, loading, error }] = useCreateInteractionMutation();

  const onSubmit = React.useCallback(
    async interactionParam => {

      const result = await createInteractionMutation({
        variables: {
          input: interactionParam
        }
      });
      console.info('submiting interaction creation', { interactionParam, result });
      history.push(`/bot/${botId}/interaction/index`);
    },
    [loading, createInteractionMutation, history]
  );

  return <InteractionForm interaction={interaction} onSubmit={onSubmit} />;
}
