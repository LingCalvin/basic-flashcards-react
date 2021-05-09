import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateAreas: '"main"',
    transition: 'transform 0.4s',
    transformStyle: 'preserve-3d',
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
