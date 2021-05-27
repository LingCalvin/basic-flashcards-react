import {
  Backdrop,
  CircularProgress,
  Container,
  Snackbar,
} from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { autoHideDuration } from '../../common/constants/snackbar';
import EditDeckForm from '../components/edit-deck-form';
import { decksService } from '../services/decks.service';
import useStyles from './add-deck.page.styles';

export default function AddDeckPage() {
  const classes = useStyles();

  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const [showSnackbar, setShowsSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <>
      <Backdrop open={submitting} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container>
        <EditDeckForm
          variant="outlined"
          defaultValues={{
            title: '',
            description: '',
            visibility: 'PRIVATE',
            cards: [{ sides: [{ text: '' }, { text: '' }] }],
          }}
          onSubmit={(value) => {
            setSubmitting(true);
            decksService
              .create({ tags: [], ...value })
              .then(() => history.goBack())
              .catch(() => {
                setSnackbarMessage('Failed to save deck.');
                setShowsSnackbar(true);
                setSubmitting(false);
              });
          }}
        />
      </Container>
      <Snackbar
        open={showSnackbar}
        message={snackbarMessage}
        autoHideDuration={autoHideDuration}
        onClose={() => setShowsSnackbar(false)}
      />
    </>
  );
}
