import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  paginationControls: {
    display: 'flex',
    justifyContent: 'center',
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

export default useStyles;
