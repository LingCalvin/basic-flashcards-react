import { Chip, Slider, Typography } from '@material-ui/core';
import { useLayoutEffect, useMemo, useState } from 'react';
import CardList from '../components/card-list';
import DeckStack from '../components/deck-stack';
import DeckStackControls from '../components/deck-stack-controls';
import Deck from '../interfaces/deck';
import useStyles from './deck.page.styles';

interface DeckPageProps {
  deck: Deck;
}

export default function DeckPage({ deck }: DeckPageProps) {
  const classes = useStyles();
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [showCardBack, setShowCardBack] = useState(false);

  // Make sure the front of the card is showing when moving to another
  useLayoutEffect(() => {
    setShowCardBack(false);
  }, [activeCardIndex]);

  // Alphabetize deck tags
  const sortedTags = useMemo(() => [...deck.tags].sort(), [deck.tags]);

  return (
    <div className={classes.root}>
      {/* Deck */}
      <section className={classes.section}>
        <Typography variant="h4">{deck.title}</Typography>
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
            className={classes.progressBar}
            value={activeCardIndex}
            max={deck.cards.length - 1}
            valueLabelFormat={(value) => value + 1}
            onChange={(_event, value) => setActiveCardIndex(value as number)}
          />
        </div>
      </section>
      {/* Tag list */}
      <section className={classes.section}>
        <Typography variant="h5">Tags</Typography>
        <div className={classes.tagList}>
          {sortedTags.map((tag) => (
            <Chip key={tag} label={tag} variant="outlined" />
          ))}
        </div>
      </section>
      {/* Term list */}
      <section className={classes.section}>
        <Typography variant="h5">Terms</Typography>
        <CardList cards={deck.cards} />
      </section>
    </div>
  );
}
