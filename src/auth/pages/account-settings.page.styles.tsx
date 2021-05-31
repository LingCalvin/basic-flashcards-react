import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  avatar: {
    height: theme.spacing(16),
    width: theme.spacing(16),
  },
  avatarText: {
    fontSize: '6rem',
  },
  generalInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    padding: theme.spacing(2),
  },
  subsection: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
}));

export default useStyles;
