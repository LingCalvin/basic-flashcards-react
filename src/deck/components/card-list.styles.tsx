import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '2fr auto 3fr',
    columnGap: theme.spacing(2),
    gap: theme.spacing(3),
  },
}));

export default useStyles;
