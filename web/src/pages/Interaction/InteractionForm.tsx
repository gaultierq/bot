import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Interaction, CreateInteractionInput, EditInteractionInput, Maybe, User } from '@web/graphql';
import Checkbox from '@material-ui/core/Checkbox';

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

const useTextField = defaultValue => {
  const [val, setVal] = React.useState(defaultValue);
  const setVal2 = React.useCallback(e => setVal(e.target.value), [setVal]);
  return [val, setVal2];
};

type InteractionParam = { __typename?: 'Interaction' } & Pick<Interaction, 'id' | 'content' > & {
  author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

type InteractionFormParams = { interaction: CreateInteractionInput | EditInteractionInput; onSubmit: (InteractionParam) => void };

export default function InteractionForm(props: InteractionFormParams) {
  const classes = useStyles();
  const { interaction, onSubmit } = props;
  const [content, setContent] = useTextField(interaction.content);


  return (
    <form
      className={classes.root}
      noValidate
      autoComplete={'off'}
      onSubmit={event => onSubmit({  content })}
    >
      <TextField id={'standard-basic'} label={'content'} value={content} onChange={setContent} />
      <div className='form-group my-4'>
        <button className='btn btn-block' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
