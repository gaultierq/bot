import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useCreateBotMutation } from '@web/graphql';
import { useHistory } from 'react-router-dom';
import { Routes } from '@web/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
);


const useTextField = defaultValue => {
  const [val, setVal] = React.useState(defaultValue);
  const setVal2 = React.useCallback(e => setVal(e.target.value), [setVal]);
  return [val, setVal2];
};


export default function BotCreate() {
  const classes = useStyles();

  const [title, setTitle] = useTextField('');
  const [image, setImage] = useTextField('');
  const history = useHistory();

  const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
    variables: {
      input: { title }
    },
  });

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete={'off'}
      onSubmit={async e => {
        console.log('submiting');
        e.preventDefault();
        if (loading) return;
        await createBotMutation();
        history.push(Routes.BOT_LIST);
      }}
    >
      <TextField id={'standard-basic'} label={'titre'} value={title} onChange={setTitle} />
      <TextField id={'standard-basic'} label={'image'} value={image} onChange={setImage} />
      <div className='form-group my-4'>
        <button className='btn btn-block' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
