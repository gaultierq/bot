import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { gql, useQuery } from '@apollo/client';
import { GetPostDocument, useGetPostQuery } from '@web/graphql'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function SpacingGrid() {
  const spacing = 2;
  // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();
  // const { loading, error, data } = useQuery(GetPostDocument, { variables: { id: 3 } });
  // const query = useGetPostQuery({id: 3})
  // console.debug('query response', { loading, error, data });

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify={'center'} spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
