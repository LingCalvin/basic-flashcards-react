import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
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
  emptyResults: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '100%',
  },
  emptyResultsIcon: {
    fontSize: theme.typography.h1.fontSize,
  },
}));

export default useStyles;
