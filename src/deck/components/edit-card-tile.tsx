import { Card, IconButton, TextField, Typography } from '@material-ui/core';
import { ArrowDownward, ArrowUpward, Delete } from '@material-ui/icons';
import useStyles from './edit-card-tile.styles';

interface EditCardTileProps {
  cardNumber: number;
  frontText: string;
  backText: string;
  onFrontTextChange: (value: string) => void;
  onBackTextChange: (value: string) => void;
  onDelete?: () => void;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}

export default function EditCardTile({
  cardNumber,
  frontText,
  backText,
  onFrontTextChange,
  onBackTextChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}: EditCardTileProps) {
  const classes = useStyles();
  return (
    <Card>
      <div className={classes.cardContent}>
        <Typography variant="h5">{`Card ${cardNumber}`}</Typography>
        <div className={classes.textFieldContainer}>
          <TextField
            label="Term"
            variant="outlined"
            multiline
            value={frontText}
            onChange={(e) => onFrontTextChange(e.target.value)}
          />
          <TextField
            label="Definition"
            variant="outlined"
            multiline
            value={backText}
            onChange={(e) => onBackTextChange(e.target.value)}
          />
        </div>
        <div className={classes.actionArea}>
          <IconButton onClick={onDelete} disabled={!onDelete}>
            <Delete />
          </IconButton>
          <IconButton onClick={onMoveUp} disabled={!onMoveUp}>
            <ArrowUpward />
          </IconButton>
          <IconButton onClick={onMoveDown} disabled={!onMoveDown}>
            <ArrowDownward />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
