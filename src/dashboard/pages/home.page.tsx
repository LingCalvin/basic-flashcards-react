import { Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import LoadableComponent from '../../common/components/loadable-component';
import Deck from '../../deck/interfaces/deck';
import { decksService } from '../../deck/services/decks.service';
import DeckInfoTile from '../components/deck-info-tile';
import useStyles from './home.page.styles';
import { deckView } from '../../router/utils/route.utils';

export default function HomePage() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  const [exampleDecks, setExampleDecks] = useState<Deck[]>([]);

  const history = useHistory();

  useEffect(() => {
    decksService
      .findAll({ orderTitleBy: 'asc', take: 3 })
      .then(({ decks }) => setExampleDecks(decks))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <div className={classes.topSection}>
        <Typography variant="h1">
          Create, search for, and review decks.
        </Typography>
      </div>
      <section className={classes.exampleDecksSection}>
        <Typography variant="h2">Example decks</Typography>
        <LoadableComponent loading={loading}>
          <div className={classes.exampleDecksContainer}>
            {exampleDecks.map((deck) => (
              <DeckInfoTile
                key={deck.id}
                deckId={deck.id ?? ''}
                title={deck.title}
                numberOfCards={deck.cards.length}
                author={deck.authorId ?? ''}
                onClick={() => history.push(deckView(deck.id ?? ''))}
              />
            ))}
          </div>
        </LoadableComponent>
      </section>
    </main>
  );
}
