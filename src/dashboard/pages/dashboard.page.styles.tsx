import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    margin: theme.spacing(3),
  },
  paginationContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
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
}));

export default useStyles;
