import {
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { useState } from 'react';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import EditCardTile from '../components/edit-card-tile';
import useStyles from './add-deck-page.styles';

export default function AddDeckPage() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cards, setCards] = useState<Array<[string, string]>>([['', '']]);

  const changeCardValue = (
    cardIndex: number,
    valueIndex: number,
    value: string
  ) => {
    setCards((state) => {
      const nextState = [...state];
      const modifiedCard: [string, string] = [...state[cardIndex]];
      modifiedCard[valueIndex] = value;
      nextState[cardIndex] = modifiedCard;
      return nextState;
    });
  };

  const addCard = () => {
    setCards((state) => [...state, ['', '']]);
  };

  const deleteCard = (index: number) => {
    setCards((state) => [...state.slice(0, index), ...state.slice(index + 1)]);
  };

  const moveCard = (currentIndex: number, targetIndex: number) => {
    setCards((state) => {
      const nextState = [...state];
      nextState.splice(targetIndex, 0, nextState.splice(currentIndex, 1)[0]);
      return nextState;
    });
  };

  return (
    <>
      <AppBarWithBackButton title="Add deck" />
      <Container className={classes.form}>
        <div className={classes.generalInfoContainer}>
          <TextField
            variant="outlined"
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            variant="outlined"
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select value="private">
            <MenuItem value="private">Private</MenuItem>
            <MenuItem value="public">Public</MenuItem>
          </Select>
        </div>

        <div className={classes.cardList}>
          {cards.map(([frontText, backText], i) => (
            <EditCardTile
              key={i}
              cardNumber={i + 1}
              frontText={frontText}
              backText={backText}
              onFrontTextChange={(value) => changeCardValue(i, 0, value)}
              onBackTextChange={(value) => changeCardValue(i, 1, value)}
              onDelete={cards.length > 1 ? () => deleteCard(i) : undefined}
              onMoveUp={i !== 0 ? () => moveCard(i, i - 1) : undefined}
              onMoveDown={
                i !== cards.length - 1 ? () => moveCard(i, i + 1) : undefined
              }
            />
          ))}
        </div>

        <Button
          variant="outlined"
          fullWidth
          startIcon={<Add />}
          onClick={addCard}
        >
          Add card
        </Button>
      </Container>
    </>
  );
}
