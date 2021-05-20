import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
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
  deckList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  sortAndSearchContainer: {
    display: 'flex',
    gap: theme.spacing(2),
  },
  addButton: {
    marginLeft: 'auto',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default useStyles;
