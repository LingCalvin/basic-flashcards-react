import { Backdrop, CircularProgress, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import LoadableComponent from '../../common/components/loadable-component';
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

  useEffect(() => {
    setLoading(true);
    decksService
      .findOne(deckId)
      .then((deck) => setDeck(deck))
      .finally(() => setLoading(false));
  }, [deckId]);

  return (
    <>
      <Backdrop open={submitting} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AppBarWithBackButton title="Edit deck" />
      <LoadableComponent loading={loading}>
        {deck && (
          <Container>
            <EditDeckForm
              title={deck.title}
              description={deck.description}
              visibility={deck.visibility}
              cards={deck.cards}
              onTitleChange={(title) =>
                setDeck((state) => {
                  if (!state) {
                    return state;
                  }
                  return { ...state, title };
                })
              }
              onDescriptionChange={(description) =>
                setDeck((state) => {
                  if (!state) {
                    return state;
                  }
                  return { ...state, description };
                })
              }
              onChangeVisibility={(visibility) =>
                setDeck((state) => {
                  if (!state) {
                    return state;
                  }
                  return { ...state, visibility };
                })
              }
              onCardsChange={(cards) =>
                setDeck((state) => {
                  if (!state) {
                    return state;
                  }
                  return { ...state, cards };
                })
              }
              onSubmit={() => {
                setSubmitting(true);
                decksService
                  .update({
                    id: deck.id,
                    title: deck.title,
                    description: deck.description,
                    visibility: deck.visibility,
                    cards: deck.cards,
                    tags: [],
                  })
                  .then(() => history.goBack())
                  .catch(() => {
                    setSubmitting(false);
                  });
              }}
            />
          </Container>
        )}
      </LoadableComponent>
    </>
  );
}
