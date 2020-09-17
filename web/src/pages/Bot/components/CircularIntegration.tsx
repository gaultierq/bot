import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import type { ButtonProps } from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    wrapper: {
      margin: theme.spacing(1),
      position: 'relative'
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700]
      }
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12
    }
  })
);

export type CircularIntegrationProps = {
  onClick: (any) => Promise<void>
};

const CircularIntegration = (props: ButtonProps) => {
  const classes = useStyles();

  const { onClick, children, ...otherProps } = props;

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef<number>();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = async (event) => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      props.onClick && await props.onClick(event);
      setSuccess(true);
      setLoading(false);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          { ...otherProps }
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          { children }
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
    </div>
  );
};

export default CircularIntegration;
