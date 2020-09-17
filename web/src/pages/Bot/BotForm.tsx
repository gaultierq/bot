import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Bot, CreateBotInput, EditBotInput, Maybe, User } from '@web/graphql';
import Checkbox from '@material-ui/core/Checkbox';
import { useTextField } from '@web/utils';

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

type BotParam = { __typename?: 'Bot' } & Pick<Bot, 'id' | 'published' | 'title' | 'image'> & {
    author?: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
  };

type BotFormParams = { bot: CreateBotInput | EditBotInput; onSubmit: (BotParam) => void };

export default function BotForm(props: BotFormParams) {
  const classes = useStyles();
  const { bot, onSubmit } = props;
  const [title, setTitle] = useTextField(bot.title);
  const [image, setImage] = useTextField(bot.image || '');
  const [published, setPublished] = React.useState(!!bot.published);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPublished(event.target.checked);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete={'off'}
      onSubmit={event => {
        event.preventDefault();
        onSubmit({ title, image, published });
      }}>
      <TextField id={'standard-basic'} label={'titre'} value={title} onChange={setTitle} />
      <TextField id={'standard-basic'} label={'image'} value={image} onChange={setImage} />
      <Checkbox checked={published} onChange={handleChange} inputProps={{ 'aria-label': 'primary checkbox' }} />
      <div className='form-group my-4'>
        <button className='btn btn-block' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
