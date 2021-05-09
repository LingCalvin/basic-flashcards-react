import clsx from 'clsx';
import { useState } from 'react';
import CardSide from './card-side';
import useStyles from './card.styles';

interface CardProps {
  frontText: string;
  backText: string;
  className?: string;
}

export default function Card({ frontText, backText, className }: CardProps) {
  const classes = useStyles();
  const [showBack, setShowBack] = useState(false);
  return (
    <div
      className={clsx(classes.root, showBack && classes.flip, className)}
      onClick={() => setShowBack((state) => !state)}
    >
      <CardSide className={classes.cardSide} text={frontText} />
      <CardSide
        className={clsx(classes.cardSide, classes.cardBack)}
        text={backText}
      />
    </div>
  );
}
