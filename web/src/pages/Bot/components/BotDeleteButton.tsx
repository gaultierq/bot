import React from 'react';
import { Bot, useDeleteBotMutation } from '@web/graphql';

export function DeleteBotButton({ bot }: {bot: Bot}) {
  const [deleteBotMutation, { error }] = useDeleteBotMutation();
  if (error) {
    console.warn('error', error);
  }
  return (
    <button className='btn btn-block' type='submit' onClick={event => {
      event.stopPropagation();
      deleteBotMutation({
        variables: { input: { id: bot.id } },
        refetchQueries: ['indexBot'],
      });
    }}
    >

      delete
    </button>
  );
}
