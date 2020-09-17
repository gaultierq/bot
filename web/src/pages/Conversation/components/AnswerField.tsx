import { useTextField } from '@web/utils';
import { useCreateAnswerMutation } from '@web/graphql';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }

    }
  })
);

export function AnswerField(props: { currentInteraction: any; conversationId: string }) {
  const { currentInteraction, conversationId } = props;
  const classes = useStyles();
  const [answer, setAnswer, setAnswerState] = useTextField('');
  const [createAnswerMutation, { data, loading, error }] = useCreateAnswerMutation();

  const onSubmit = async event => {
    event.preventDefault();
    console.debug('event', { event });
    if (currentInteraction) {
      const result = await createAnswerMutation({
        variables: {
          input: { conversationId, content: answer, interactionId: currentInteraction.id }
        },
        refetchQueries: ['getConversation']
      });
    }
    setAnswerState('');
  };

  return (
    <>
      <TextField
        disabled={!props.currentInteraction}
        id={'standard-basic'}
        label={'répondre'}
        value={answer}
        onChange={setAnswer}
      />
      <div className='form-group my-4'>
        <Button onClick={onSubmit}>
          Envoyer
        </Button>
      </div>
    </>
  );
}
