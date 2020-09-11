import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Bot, useCreateBotMutation } from '@web/graphql';
import { CardMedia, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 140
  }
});

type BotCardProps = { bot: Bot };

export function BotAdd(): React.ReactElement {
  const classes = useStyles();

  const [createBotMutation, { data, loading, error }] = useCreateBotMutation({
    variables: {
      input: { title: 'toto' }
    },
  });
  console.debug('mutation status:', { data, loading, error });

  const addBot = React.useCallback(() => {
    console.debug('clicked add bot; executing mutation');
    createBotMutation();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={addBot} style={{ backgroundColor: 'blue' }}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            Ajouter un bot
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function BotCard(props: BotCardProps): React.ReactElement<BotCardProps> {
  const classes = useStyles();
  const bot = props.bot;
  return (
    <Card className={classes.root}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <CardActionArea>
        {bot.image && (
          <CardMedia className={classes.media} image={bot.image} title={'Contemplative Reptile'}>
            <Typography className={classes.title} color={'textSecondary'} gutterBottom>
              {bot.title}
            </Typography>
          </CardMedia>
        )}
        <CardContent></CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BotCard;
