import { IconButton, Typography } from '@material-ui/core';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import useStyles from './deck-stack-controls.styles';

interface DeckStackControlsProps {
  currentIndex: number;
  numberOfCards: number;
  onBack: () => void;
  onForward: () => void;
}

export default function DeckStackControls({
  currentIndex,
  numberOfCards,
  onBack,
  onForward,
}: DeckStackControlsProps) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        aria-label="previous card"
        onClick={onBack}
        disabled={currentIndex === 0 || numberOfCards === 0}
      >
        <ArrowBack />
      </IconButton>
      <div>
        <Typography
          variant="subtitle2"
          component="span"
          align="center"
          className={classes.positionIndicator}
        >{`${
          numberOfCards > 0 ? currentIndex + 1 : 0
        }/${numberOfCards}`}</Typography>
      </div>

      <IconButton
        aria-label="next card"
        onClick={onForward}
        disabled={currentIndex === numberOfCards - 1 || numberOfCards === 0}
      >
        <ArrowForward />
      </IconButton>
    </div>
  );
}
