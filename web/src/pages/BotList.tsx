import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { gql, useQuery } from '@apollo/client';
import { GetPostDocument, useGetPostQuery } from '@web/graphql';
import BotCard, { BotAdd } from './BotCard';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing(2)
    }
  })
);

const BOTLIST = [
  { id: '1', title: 'first bot 1', published: true, image: 'https://placeimg.com/640/480/any' },
  { id: '2', title: 'first bot 2', published: true, image: 'https://placeimg.com/640/480/any' },
  { id: '3', title: 'first bot 3', published: true, image: 'https://placeimg.com/640/480/any' },
  { id: '4', title: 'first bot 4', published: true, image: 'https://placeimg.com/640/480/any' }
];

function BotList() {
  const spacing = 2;
  // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  // const { loading, error, data } = useQuery(GetPostDocument, { variables: { id: 3 } });
  // const query = useGetPostQuery({id: 3})
  // console.debug('query response', { loading, error, data });
  const history = useHistory();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify={'center'} spacing={spacing}>
          <Grid key={'add_bot_key'} item>
            <BotAdd />
          </Grid>
          {BOTLIST.map(bot => {
            const goToBot = (botId) => {
              return () => {
                console.debug('clicked');
                history.push(`/bot/${botId}`);
              };
            };
            return (
              <Grid key={bot.id} onClick={goToBot(bot.id)} item>
                <BotCard bot={bot} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default BotList;
