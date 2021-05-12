import clsx from 'clsx';
import CardSide from './card-side';
import useStyles from './card.styles';

interface CardProps {
  frontText: string;
  backText: string;
  showBack: boolean;
  className?: string;
  onFlip: () => void;
}

export default function Card({
  frontText,
  backText,
  showBack,
  className,
  onFlip,
}: CardProps) {
  const classes = useStyles();
  return (
    <div
      className={clsx(
        classes.root,
        classes.cardFlipTransition,
        showBack && classes.flip,
        className
      )}
      onClick={onFlip}
    >
      <CardSide className={classes.cardSide} text={frontText} />
      <CardSide
        className={clsx(classes.cardSide, classes.cardBack)}
        text={backText}
      />
    </div>
  );
}
