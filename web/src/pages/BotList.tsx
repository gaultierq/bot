import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import { useIndexBotQuery } from '@web/graphql';
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

function BotList() {
  const spacing = 2;
  // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  // const { loading, error, data } = useQuery(GetPostDocument, { variables: { id: 3 } });
  // const query = useGetPostQuery({id: 3})

  const history = useHistory();
  const { data, loading, error } = useIndexBotQuery();
  console.debug('query response', { loading, error, data });

  const bots = _.get(data, 'indexBot.bots', []);

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify={'center'} spacing={spacing}>
          <Grid key={'add_bot_key'} item>
            <BotAdd />
          </Grid>
          {bots.map(bot => {
            const goToBot = botId => {
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
