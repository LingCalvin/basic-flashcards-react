import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  typography: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export default useStyles;
