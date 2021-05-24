import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    whiteSpace: 'nowrap',
  },
  homeLink: {
    textTransform: 'none',
  },
  titleContainer: {
    flexGrow: 1,
  },
  avatarButton: {
    padding: theme.spacing(0.5),
  },
  menuUsername: {
    textAlign: 'center',
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
  },
  searchBar: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    maxWidth: '600px',
    width: '100%',
  },
  searchBarInput: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    width: '100%',
  },
  toolbar: {
    gap: theme.spacing(1),
  },
}));

export default useStyles;