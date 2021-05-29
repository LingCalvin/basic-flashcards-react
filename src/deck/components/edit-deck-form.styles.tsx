import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  generalInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  cardList: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  saveButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  editCardTileContainer: {
    paddingTop: theme.spacing(2),
  },
}));

export default useStyles;
