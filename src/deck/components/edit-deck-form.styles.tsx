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
  editCardTile: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(2),
  },
  editCardTileFieldContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
  },
  editCardTileActionArea: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  editCardTileContainer: {
    paddingTop: theme.spacing(2),
  },
}));

export default useStyles;
