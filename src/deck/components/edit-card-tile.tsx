import {
  IconButton,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
} from '@material-ui/core';
import { ArrowDownward, ArrowUpward, Delete } from '@material-ui/icons';
import { memo, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import useStyles from './edit-card-tile.styles';
import { FormValues } from './edit-deck-form';

export interface EditCardTileProps {
  index: number;
  variant?: TextFieldProps['variant'];
  removeDisabled?: boolean;
  moveUpDisabled?: boolean;
  moveDownDisabled?: boolean;
  onRemove: (index: number) => void;
  onMove: (source: number, destination: number) => void;
}

export function EditCardTileInner({
  index,
  variant,
  removeDisabled,
  moveUpDisabled,
  moveDownDisabled,
  onRemove,
  onMove,
}: EditCardTileProps) {
  const classes = useStyles();

  const {
    formState: {
      errors: { cards: cardErrors },
    },
    getValues,
    register,
  } = useFormContext<FormValues>();

  const { sides } = getValues('cards')[index] ?? [{ text: '' }, { text: '' }];

  const defaultTerm = sides?.[0].text;
  const defaultDefinition = sides?.[1].text;

  const handleRemove = useCallback(() => onRemove(index), [index, onRemove]);

  const handleMoveUp = useCallback(
    () => onMove(index, index - 1),
    [index, onMove]
  );

  const handleMoveDown = useCallback(
    () => onMove(index, index + 1),
    [index, onMove]
  );

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" component="div">{`Card ${
        index + 1
      }`}</Typography>
      <div className={classes.textFieldContainer}>
        <TextField
          label="Term"
          required
          multiline
          variant={variant}
          defaultValue={defaultTerm}
          inputProps={{
            'aria-label': 'term',
            ...register(`cards.${index}.sides.0.text` as const),
          }}
          error={cardErrors?.[index]?.sides?.[0]?.text !== undefined}
          helperText={cardErrors?.[index]?.sides?.[0]?.text?.message}
        />
        <TextField
          label="Definition"
          required
          multiline
          variant={variant}
          defaultValue={defaultDefinition}
          inputProps={{
            'aria-label': 'definition',
            ...register(`cards.${index}.sides.1.text` as const),
          }}
          error={cardErrors?.[index]?.sides?.[1]?.text !== undefined}
          helperText={cardErrors?.[index]?.sides?.[1]?.text?.message}
        />
      </div>
      <div className={classes.actionArea}>
        <IconButton
          aria-label="delete"
          onClick={handleRemove}
          disabled={removeDisabled}
        >
          <Delete />
        </IconButton>
        <IconButton
          aria-label="move up"
          onClick={handleMoveUp}
          disabled={moveUpDisabled}
        >
          <ArrowUpward />
        </IconButton>
        <IconButton
          aria-label="move down"
          onClick={handleMoveDown}
          disabled={moveDownDisabled}
        >
          <ArrowDownward />
        </IconButton>
      </div>
    </Paper>
  );
}

const EditCardTile = memo(EditCardTileInner);
export default EditCardTile;
