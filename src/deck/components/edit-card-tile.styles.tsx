import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textFieldContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    margin: theme.spacing(2),
  },
  actionArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));
export default useStyles;
