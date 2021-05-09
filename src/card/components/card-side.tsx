import { Card as MuiCard, CardContent, Typography } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './card-side.styles';

interface CardSideProps {
  text: string;
  className?: string;
}

export default function CardSide({ text, className }: CardSideProps) {
  const classes = useStyles();
  return (
    <MuiCard className={clsx(classes.root, className)}>
      <CardContent className={classes.content}>
        <Typography>{text}</Typography>
      </CardContent>
    </MuiCard>
  );
}
