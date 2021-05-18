import { useLayoutEffect, useState } from 'react';
import CardComponent from '../../card/components/card';
import Card from '../../card/interfaces/card';
import useStyles from './deck-stack.styles';

interface DeckStackProps {
  cards: Card[];
  activeIndex: number;
  showCardBack: boolean;
  className?: string;
  onFlipCard: () => void;
}

export default function DeckStack({
  cards,
  activeIndex,
  showCardBack,
  className,
  onFlipCard,
}: DeckStackProps) {
  const activeCard = cards[activeIndex];
  const classes = useStyles();

  // Unmount the Card component each time the active card changes
  const [unmount, setUnmount] = useState(false);

  useLayoutEffect(() => {
    setUnmount(true);
  }, [activeIndex]);

  useLayoutEffect(() => {
    if (unmount) {
      setUnmount(false);
    }
  }, [unmount]);

  if (!activeCard) {
    return (
      <div className={className}>
        {!unmount && (
          <CardComponent
            className={classes.card}
            frontText=""
            backText=""
            showBack={false}
            onFlip={() => {}}
          />
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      {!unmount && (
        <CardComponent
          className={classes.card}
          frontText={activeCard.sides[0].text}
          backText={activeCard.sides[1].text}
          showBack={showCardBack}
          onFlip={onFlipCard}
        />
      )}
    </div>
  );
}
