import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  answer: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 6
  }
});

export function InteractionMessage({ content }: { content: string | null | undefined }) {
  const styles = useStyles();
  return (
    <div
      style={{
        textAlign: 'left',
        padding: 12
      }}
    >
      <Typography variant='caption' className={styles.answer}>
        {content}
      </Typography>
    </div>
  );
}
