import {
  Backdrop,
  CircularProgress,
  Container,
  Snackbar,
  Typography,
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import LoadableComponent from '../../common/components/loadable-component';
import Page from '../../common/components/page';
import { autoHideDuration } from '../../common/constants/snackbar';
import useUniqueId from '../../common/hooks/use-unique-id';
import EditDeckForm from '../components/edit-deck-form';
import Deck from '../interfaces/deck';
import { decksService } from '../services/decks.service';
import useStyles from './add-deck.page.styles';

export default function EditDeckPage() {
  const classes = useStyles();
  const { id: deckId } = useParams<{ id: string }>();
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  const [deck, setDeck] = useState<Deck | null>(null);
  const [loading, setLoading] = useState(true);

  const [showSnackbar, setShowsSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const generalInfoSectionId = useUniqueId();
  const cardListId = useUniqueId();
  const submitButtonId = useUniqueId();

  useEffect(() => {
    setLoading(true);
    decksService
      .findOne(deckId)
      .then((deck) => setDeck(deck))
      .finally(() => setLoading(false));
  }, [deckId]);

  return (
    <Page
      title={deck?.title ? `Edit "${deck.title}"` : 'Edit deck'}
      skipLinks={[
        { fragment: 'content', text: 'Skip to content' },
        { fragment: generalInfoSectionId, text: 'Skip to general info' },
        { fragment: cardListId, text: 'Skip to card list' },
        { fragment: submitButtonId, text: 'Skip to submit button' },
      ]}
    >
      <main id="content">
        <Backdrop open={submitting} className={classes.backdrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <LoadableComponent loading={loading}>
          {deck && (
            <Container>
              <Typography variant="h1">Edit deck</Typography>
              <EditDeckForm
                variant="outlined"
                defaultValues={deck}
                onSubmit={(value) => {
                  setSubmitting(true);
                  decksService
                    .update({ tags: [], ...value })
                    .then(() => history.goBack())
                    .catch(() => {
                      setSnackbarMessage('Failed to update deck.');
                      setShowsSnackbar(true);
                      setSubmitting(false);
                    });
                }}
                generalInfoSectionId={generalInfoSectionId}
                cardListId={cardListId}
                submitButtonId={submitButtonId}
              />
            </Container>
          )}
        </LoadableComponent>
        <Snackbar
          open={showSnackbar}
          message={snackbarMessage}
          autoHideDuration={autoHideDuration}
          onClose={() => setShowsSnackbar(false)}
        />
      </main>
    </Page>
  );
}
