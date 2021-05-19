import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    padding: theme.spacing(2),
    '&:hover': {
      backgroundColor: theme.palette.grey[50],
    },
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

export default useStyles;
