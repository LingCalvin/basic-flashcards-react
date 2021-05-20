import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
  },
  deckStack: {
    height: 280,
    width: '100%',
    maxWidth: 397,
  },
  deckStackContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  progressBar: {
    width: '100%',
    maxWidth: 400,
  },
  tagList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(0.5),
  },
}));

export default useStyles;
