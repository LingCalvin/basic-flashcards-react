import { Card, IconButton, TextField, Typography } from '@material-ui/core';
import { ArrowDownward, ArrowUpward, Delete } from '@material-ui/icons';
import { useState } from 'react';
import missingRequiredFieldErrorMessage from '../../common/constants/missing-required-field-error-message';
import useStyles from './edit-card-tile.styles';

interface EditCardTileProps {
  cardNumber: number;
  frontText: string;
  backText: string;
  forceValidate?: boolean;
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
  forceValidate,
  onFrontTextChange,
  onBackTextChange,
  onDelete,
  onMoveUp,
  onMoveDown,
}: EditCardTileProps) {
  const classes = useStyles();

  const [validateFrontText, setValidateFrontText] = useState(false);
  const frontTextValid = frontText.length > 0;
  const frontTextError =
    (forceValidate || validateFrontText) && !frontTextValid;

  const [validateBackText, setValidateBackText] = useState(false);
  const backTextValid = backText.length > 0;
  const backTextError = (forceValidate || validateBackText) && !backTextValid;

  return (
    <Card>
      <div className={classes.cardContent}>
        <Typography variant="h5">{`Card ${cardNumber}`}</Typography>
        <div className={classes.textFieldContainer}>
          <TextField
            label="Term"
            required
            variant="outlined"
            multiline
            value={frontText}
            error={frontTextError}
            helperText={
              frontTextError ? missingRequiredFieldErrorMessage : undefined
            }
            onChange={(e) => {
              setValidateFrontText(true);
              onFrontTextChange(e.target.value);
            }}
            inputProps={{ 'aria-label': 'term' }}
          />
          <TextField
            label="Definition"
            required
            variant="outlined"
            multiline
            value={backText}
            error={backTextError}
            helperText={
              backTextError ? missingRequiredFieldErrorMessage : undefined
            }
            onChange={(e) => {
              setValidateBackText(true);
              onBackTextChange(e.target.value);
            }}
            inputProps={{ 'aria-label': 'definition' }}
          />
        </div>
        <div className={classes.actionArea}>
          <IconButton
            aria-label="delete"
            onClick={onDelete}
            disabled={!onDelete}
          >
            <Delete />
          </IconButton>
          <IconButton
            aria-label="move up"
            onClick={onMoveUp}
            disabled={!onMoveUp}
          >
            <ArrowUpward />
          </IconButton>
          <IconButton
            aria-label="move down"
            onClick={onMoveDown}
            disabled={!onMoveDown}
          >
            <ArrowDownward />
          </IconButton>
        </div>
      </div>
    </Card>
  );
}
