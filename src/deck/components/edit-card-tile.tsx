import {
  IconButton,
  Paper,
  TextField,
  TextFieldProps,
  Typography,
} from '@material-ui/core';
import {
  ArrowDownward,
  ArrowUpward,
  Delete,
  DragHandle,
} from '@material-ui/icons';
import { memo, useCallback } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { UseFormRegister } from 'react-hook-form';
import useUniqueId from '../../common/hooks/use-unique-id';
import useStyles from './edit-card-tile.styles';
import { FormValues } from './edit-deck-form';

export interface EditCardTileProps {
  index: number;
  variant?: TextFieldProps['variant'];
  defaultTerm: string;
  defaultDefinition: string;
  termError?: string;
  definitionError?: string;
  removeDisabled?: boolean;
  moveUpDisabled?: boolean;
  moveDownDisabled?: boolean;
  onRemove: (index: number) => void;
  onMove: (source: number, destination: number) => void;
  register: UseFormRegister<FormValues>;
}

export function EditCardTileInner(props: EditCardTileProps) {
  const {
    index,
    variant,
    defaultTerm,
    defaultDefinition,
    termError,
    definitionError,
    removeDisabled,
    moveUpDisabled,
    moveDownDisabled,
    onRemove,
    onMove,
    register,
  } = props;
  const classes = useStyles();

  const draggableId = useUniqueId();

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
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <Paper
          className={classes.root}
          {...provided.draggableProps}
          innerRef={provided.innerRef}
        >
          <div className={classes.header}>
            <Typography variant="h5" component="div">{`Card ${
              index + 1
            }`}</Typography>
            <div
              aria-label="card reorder drag handle"
              {...provided.dragHandleProps}
              style={{ height: '24px' }}
            >
              <DragHandle />
            </div>
          </div>
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
              error={termError !== undefined}
              helperText={termError}
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
              error={definitionError !== undefined}
              helperText={definitionError}
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
      )}
    </Draggable>
  );
}

const EditCardTile = memo(EditCardTileInner);
export default EditCardTile;
