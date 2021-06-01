import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
  },
  skipLink: {
    position: 'fixed',
    top: theme.spacing(-10),
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.background.paper,
    textTransform: 'none',
    zIndex: theme.zIndex.appBar + 1,
    '&:focus': {
      top: theme.spacing(2),
      left: theme.spacing(2),
      textDecoration: 'underline',
    },
  },
}));

export default useStyles;
