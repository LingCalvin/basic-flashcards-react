import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loginSection: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  buttonBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  exampleDecksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  exampleDecksSection: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    paddingBottom: theme.spacing(3),
  },
}));

export default useStyles;
