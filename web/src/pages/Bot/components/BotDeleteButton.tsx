import React from 'react';
import { Bot, useDeleteBotMutation } from '@web/graphql';
import Button from '@material-ui/core/Button';

export function DeleteBotButton({ bot }: { bot: Bot }) {
  const [deleteBotMutation, { error }] = useDeleteBotMutation();
  if (error) {
    console.warn('error', error);
  }
  return (
    <Button
      className='btn btn-block'
      type='submit'
      onClick={event => {
        event.stopPropagation();
        deleteBotMutation({
          variables: { input: { id: bot.id } },
          refetchQueries: ['indexBot']
        });
      }}>
      delete
    </Button>
  );
}
