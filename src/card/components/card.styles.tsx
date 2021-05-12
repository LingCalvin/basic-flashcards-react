import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateAreas: '"main"',
    transformStyle: 'preserve-3d',
  },
  cardFlipTransition: {
    transition: 'transform 0.3s',
  },
  flip: {
    transform: 'rotateX(180deg)',
  },
  cardSide: {
    gridArea: 'main',
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    transform: 'rotateX(180deg)',
  },
});

export default useStyles;
