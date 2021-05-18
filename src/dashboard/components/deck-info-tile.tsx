import { Paper, Typography } from '@material-ui/core';
import Link from '../../common/components/link';
import useStyles from './deck-info-tile.styles';

interface DeckInfoTileProps {
  title: string;
  numberOfCards: number;
  author: string;
  onClick?: () => void;
}

export default function DeckInfoTile({
  title,
  numberOfCards,
  author,
  onClick,
}: DeckInfoTileProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root} onClick={onClick}>
      <Typography variant="h5">{title}</Typography>
      <Typography>{`${numberOfCards} cards`}</Typography>
      <Typography>
        By <Link to={`/users/${author}`}>{author}</Link>
      </Typography>
    </Paper>
  );
}
