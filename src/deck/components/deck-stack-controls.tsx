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
      <IconButton onClick={onBack} disabled={currentIndex === 0}>
        <ArrowBack />
      </IconButton>
      <div>
        <Typography
          variant="subtitle2"
          align="center"
          className={classes.positionIndicator}
        >{`${currentIndex + 1}/${numberOfCards}`}</Typography>
      </div>

      <IconButton
        onClick={onForward}
        disabled={currentIndex === numberOfCards - 1}
      >
        <ArrowForward />
      </IconButton>
    </div>
  );
}
