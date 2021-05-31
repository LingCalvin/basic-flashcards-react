import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(theme.palette.grey[600]),
    backgroundColor: theme.palette.grey[600],
    display: 'flex',
  },
  text: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export default useStyles;
