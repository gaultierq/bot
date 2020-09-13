import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Interaction, useCreateInteractionMutation } from '@web/graphql';
import { CardMedia, CardActionArea } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ReactLogo from '@web/assets/images/logo.png';
import { Routes } from '@web/constants';
import { DeleteInteractionButton } from './InteractionDeleteButton';

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
    fontWeight: 'bold'
    // color: 'white'
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 140
  }
});

type InteractionCardProps = { interaction: Interaction };

export function InteractionAdd({ botId }: {botId: string}): React.ReactElement {
  const classes = useStyles();


  const history = useHistory();
  const addInteraction = React.useCallback(() => {
    console.debug('clicked add interaction; executing mutation');
    history.push(`/bot/${botId}/interaction/new`);
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={addInteraction} style={{ backgroundColor: 'blue' }}>
        <CardContent>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            Ajouter un interaction
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

function InteractionCard(props: InteractionCardProps): React.ReactElement<InteractionCardProps> {
  const classes = useStyles();
  const interaction = props.interaction;
  return (
    <Card className={classes.root}>
      {/* eslint-disable-next-line react/jsx-no-undef */}
      <CardActionArea>
        <Typography className={classes.title} color={'textSecondary'} gutterBottom>
          {interaction.content}
        </Typography>
        <DeleteInteractionButton interaction={interaction} />
      </CardActionArea>
    </Card>
  );
}

export default InteractionCard;
