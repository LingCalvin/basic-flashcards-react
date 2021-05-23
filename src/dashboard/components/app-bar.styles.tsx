import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
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
    width: '300px',
  },
  searchBarInput: {
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  toolbar: {
    gap: theme.spacing(1),
  },
}));

export default useStyles;
