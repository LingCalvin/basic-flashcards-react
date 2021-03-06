import { Button, Paper, Typography } from '@material-ui/core';
import Link from '../../common/components/link';
import { deckView } from '../../router/utils/route.utils';
import useStyles from './deck-info-tile.styles';

interface DeckInfoTileProps {
  title: string;
  deckId: string;
  numberOfCards: number;
  author?: string;
  onDelete?: () => void;
  onExport?: () => void;
  onEdit?: () => void;
}

export default function DeckInfoTile({
  title,
  deckId,
  numberOfCards,
  author,
  onDelete,
  onExport,
  onEdit,
}: DeckInfoTileProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Link to={deckView(deckId)}>
        <Typography className={classes.title} variant="h5" component="div">
          {title}
        </Typography>
      </Link>
      <Typography>{`${numberOfCards} cards`}</Typography>
      {author && (
        <Typography
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) =>
            e.stopPropagation()
          }
          component="span"
        >
          By <Link to={`/users/${author}`}>{author}</Link>
        </Typography>
      )}
      {(onDelete || onExport || onEdit) && (
        <div className={classes.buttonBox}>
          {onDelete && (
            <Button
              className={classes.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              Delete
            </Button>
          )}
          {onExport && (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onExport();
              }}
            >
              Export
            </Button>
          )}
          {onEdit && (
            <Button
              color="primary"
              onClick={(e: any) => {
                e.stopPropagation();
                onEdit();
              }}
            >
              Edit
            </Button>
          )}
        </div>
      )}
    </Paper>
  );
}
