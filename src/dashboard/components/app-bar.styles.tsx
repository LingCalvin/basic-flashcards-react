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
}));

export default useStyles;
