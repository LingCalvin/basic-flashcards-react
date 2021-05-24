import { Button, MenuItem, TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useState } from 'react';
import Card from '../../card/interfaces/card';
import missingRequiredFieldErrorMessage from '../../common/constants/missing-required-field-error-message';
import { DeckVisibility } from '../types/deck-visibility';
import EditCardTile from './edit-card-tile';
import useStyles from './edit-deck-form.styles';

interface EditDeckFormProps {
  title: string;
  description: string;
  visibility: DeckVisibility;
  cards: Card[];
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onChangeVisibility: (value: DeckVisibility) => void;
  onCardsChange: (value: Card[]) => void;
  onSubmit: () => void;
}

export default function EditDeckForm({
  title,
  description,
  visibility,
  cards,
  onTitleChange,
  onDescriptionChange,
  onChangeVisibility,
  onCardsChange,
  onSubmit,
}: EditDeckFormProps) {
  const classes = useStyles();

  const [validateTitle, setValidateTitle] = useState(false);
  const [forceValidate, setForceValidate] = useState(false);
  const showTitleError = (forceValidate || validateTitle) && title.length === 0;

  const changeCardSideText = (
    cardIndex: number,
    side: number,
    value: string
  ) => {
    const newCards = [...cards];
    const modifiedCard = { ...cards[cardIndex] };
    modifiedCard.sides[side].text = value;
    newCards[cardIndex] = modifiedCard;
    onCardsChange(newCards);
  };

  const addCard = () => {
    onCardsChange([...cards, { sides: [{ text: '' }, { text: '' }] }]);
  };

  const deleteCard = (index: number) => {
    onCardsChange([...cards.slice(0, index), ...cards.slice(index + 1)]);
  };

  const moveCard = (currentIndex: number, targetIndex: number) => {
    const newCards = [...cards];
    newCards.splice(targetIndex, 0, newCards.splice(currentIndex, 1)[0]);
    onCardsChange(newCards);
  };

  return (
    <form
      noValidate
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (
          title.length === 0 ||
          cards.some(({ sides }) =>
            sides.some((side) => side.text.length === 0)
          )
        ) {
          setForceValidate(true);
          return;
        }
        onSubmit();
      }}
    >
      <div className={classes.generalInfoContainer}>
        <TextField
          required
          variant="outlined"
          label="Title"
          fullWidth
          error={showTitleError}
          helperText={
            showTitleError ? missingRequiredFieldErrorMessage : undefined
          }
          value={title}
          onChange={(e) => {
            setValidateTitle(true);
            onTitleChange(e.target.value);
          }}
          inputProps={{ 'aria-label': 'title' }}
        />
        <TextField
          variant="outlined"
          label="Description"
          fullWidth
          value={description}
          onChange={(e) => onDescriptionChange(e.target.value)}
          inputProps={{ 'aria-label': 'description' }}
        />
        <TextField
          variant="outlined"
          value={visibility}
          onChange={(e) => onChangeVisibility(e.target.value as DeckVisibility)}
          select
          label="Visibility"
          inputProps={{ 'aria-label': 'visibility' }}
        >
          <MenuItem value="PRIVATE">Private</MenuItem>
          <MenuItem value="PUBLIC">Public</MenuItem>
        </TextField>
      </div>

      <div className={classes.cardList}>
        {cards.map(
          ({ sides: [{ text: frontText }, { text: backText }] }, i) => (
            <EditCardTile
              key={i}
              forceValidate={forceValidate}
              cardNumber={i + 1}
              frontText={frontText}
              backText={backText}
              onFrontTextChange={(value) => changeCardSideText(i, 0, value)}
              onBackTextChange={(value) => changeCardSideText(i, 1, value)}
              onDelete={cards.length > 1 ? () => deleteCard(i) : undefined}
              onMoveUp={i !== 0 ? () => moveCard(i, i - 1) : undefined}
              onMoveDown={
                i !== cards.length - 1 ? () => moveCard(i, i + 1) : undefined
              }
            />
          )
        )}
      </div>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<Add />}
        onClick={addCard}
      >
        Add card
      </Button>
      <div className={classes.saveButtonContainer}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </div>
    </form>
  );
}
