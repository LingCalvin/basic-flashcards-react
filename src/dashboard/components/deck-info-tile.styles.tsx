import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  title: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  deleteButton: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
