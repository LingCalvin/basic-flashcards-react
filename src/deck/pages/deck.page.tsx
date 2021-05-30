import { Chip, Slider, Typography } from '@material-ui/core';
import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';
import Link from '../../common/components/link';
import LoadableComponent from '../../common/components/loadable-component';
import CardList from '../components/card-list';
import DeckStack from '../components/deck-stack';
import DeckStackControls from '../components/deck-stack-controls';
import Deck from '../interfaces/deck';
import { decksService } from '../services/decks.service';
import useStyles from './deck.page.styles';

export default function DeckPage() {
  const classes = useStyles();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showCardBack, setShowCardBack] = useState(false);
  const { id: deckId } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);

  const [deck, setDeck] = useState<Deck | null>(null);

  useEffect(() => {
    setLoading(true);
    decksService
      .findOne(deckId)
      .then((deck) => setDeck(deck))
      .finally(() => setLoading(false));
  }, [deckId]);

  // Make sure the front of the card is showing when moving to another
  useLayoutEffect(() => {
    setShowCardBack(false);
  }, [activeCardIndex]);

  // Alphabetize deck tags
  const sortedTags = useMemo(
    () => (deck?.tags ? [...deck.tags].sort() : []),
    [deck?.tags]
  );

  return (
    <main className={classes.root}>
      {/* Deck */}
      <LoadableComponent loading={loading}>
        {deck && (
          <>
            <div>
              <Typography variant="h1">{deck.title}</Typography>
              <Typography variant="subtitle1" component="div">
                by <Link to={`/users/${deck.authorId}`}>{deck.authorId}</Link>
              </Typography>
            </div>
            <section className={classes.section}>
              <div className={classes.deckStackContainer}>
                <DeckStack
                  className={classes.deckStack}
                  cards={deck.cards}
                  activeIndex={activeCardIndex}
                  showCardBack={showCardBack}
                  onFlipCard={() => setShowCardBack((state) => !state)}
                />
                <DeckStackControls
                  currentIndex={activeCardIndex}
                  numberOfCards={deck.cards.length}
                  onBack={() => {
                    setActiveCardIndex((state) => state - 1);
                  }}
                  onForward={() => {
                    setActiveCardIndex((state) => state + 1);
                  }}
                />
                <Slider
                  aria-label="current card slider"
                  className={classes.progressBar}
                  value={deck.cards.length !== 1 ? activeCardIndex : 1}
                  max={deck.cards.length !== 1 ? deck.cards.length - 1 : 1}
                  valueLabelFormat={(value) => value + 1}
                  onChange={
                    deck.cards.length > 1
                      ? (_event, value) => setActiveCardIndex(value as number)
                      : undefined
                  }
                />
              </div>
            </section>
            {/* Tag list */}
            <section className={classes.section}>
              <Typography variant="h2">Tags</Typography>
              <div className={classes.tagList}>
                {sortedTags.map((tag) => (
                  <Chip key={tag} label={tag} variant="outlined" />
                ))}
              </div>
            </section>
            {/* Term list */}
            <section className={classes.section}>
              <Typography variant="h2">Terms</Typography>
              <CardList cards={deck.cards} />
            </section>
          </>
        )}
      </LoadableComponent>
    </main>
  );
}
