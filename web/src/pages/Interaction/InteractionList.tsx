import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import { useIndexInteractionQuery } from '@web/graphql';
import InteractionCard, { InteractionAdd } from './components/InteractionCard';
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

function InteractionList({ botId }: {botId: string}) {
  const spacing = 2;
  // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  // const { loading, error, data } = useQuery(GetPostDocument, { variables: { id: 3 } });
  // const query = useGetPostQuery({id: 3})

  const history = useHistory();
  const { data, loading, error } = useIndexInteractionQuery({ variables: { input: { botId } } });
  console.debug('query response', { loading, error, data });

  const interactions = _.get(data, 'indexInteraction.interactions', []);
  const goToInteraction = interactionId => {
    return () => {
      history.push(`/interaction/${interactionId}/edit`);
    };
  };
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify={'center'} spacing={spacing}>
          <Grid key={'add_interaction_key'} item>
            <InteractionAdd botId={botId} />
          </Grid>
          {interactions.map(interaction => {
            return (
              <Grid key={interaction.id} onClick={goToInteraction(interaction.id)} item>
                <InteractionCard interaction={interaction} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default InteractionList;
