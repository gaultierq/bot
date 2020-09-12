import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Bot, CreateBotInput, EditBotInput, Maybe, User } from '@web/graphql';

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

type BotParam = { __typename?: 'Bot' } & Pick<Bot, 'id' | 'published' | 'title' | 'image'> & {
  author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

type BotFormParams = { bot: CreateBotInput | EditBotInput; onSubmit: (BotParam) => void };

export default function BotForm(props: BotFormParams) {
  const classes = useStyles();
  const { bot, onSubmit } = props;
  const [title, setTitle] = useTextField(bot.title);
  const [image, setImage] = useTextField(bot.image);

  return (
    <form className={classes.root} noValidate autoComplete={'off'} onSubmit={event => onSubmit({ title, image })}>
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
