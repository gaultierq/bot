import React from 'react';
import { Interaction, useDeleteInteractionMutation } from '@web/graphql';

export function DeleteInteractionButton({ interaction }: { interaction: Interaction }) {
  const [deleteInteractionMutation, { error }] = useDeleteInteractionMutation();
  if (error) {
    console.warn('error', error);
  }
  return (
    <button
      className='btn btn-block'
      type='submit'
      onClick={event => {
        event.stopPropagation();
        deleteInteractionMutation({
          variables: { input: { id: interaction.id } },
          refetchQueries: ['indexInteraction']
        });
      }}
    >
      delete
    </button>
  );
}
