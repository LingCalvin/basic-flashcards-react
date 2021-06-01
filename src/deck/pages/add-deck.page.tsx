import {
  Backdrop,
  CircularProgress,
  Container,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Page from '../../common/components/page';
import { autoHideDuration } from '../../common/constants/snackbar';
import useUniqueId from '../../common/hooks/use-unique-id';
import EditDeckForm from '../components/edit-deck-form';
import { decksService } from '../services/decks.service';
import useStyles from './add-deck.page.styles';

export default function AddDeckPage() {
  const classes = useStyles();

  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const [showSnackbar, setShowsSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const generalInfoSectionId = useUniqueId();
  const cardListId = useUniqueId();
  const submitButtonId = useUniqueId();

  return (
    <Page
      title="Create deck"
      skipLinks={[
        { fragment: 'content', text: 'Skip to content' },
        { fragment: generalInfoSectionId, text: 'Skip to general info' },
        { fragment: cardListId, text: 'Skip to card list' },
        { fragment: submitButtonId, text: 'Skip to submit button' },
      ]}
    >
      <Backdrop open={submitting} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container component="main" id="content">
        <Typography variant="h1">Create deck</Typography>
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
          generalInfoSectionId={generalInfoSectionId}
          cardListId={cardListId}
          submitButtonId={submitButtonId}
        />
        <Snackbar
          open={showSnackbar}
          message={snackbarMessage}
          autoHideDuration={autoHideDuration}
          onClose={() => setShowsSnackbar(false)}
        />
      </Container>
    </Page>
  );
}
