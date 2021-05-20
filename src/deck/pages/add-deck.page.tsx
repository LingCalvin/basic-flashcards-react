import { Backdrop, CircularProgress, Container } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Card from '../../card/interfaces/card';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import EditDeckForm from '../components/edit-deck-form';
import { decksService } from '../services/decks.service';
import { DeckVisibility } from '../types/deck-visibility';
import useStyles from './add-deck.page.styles';

export default function AddDeckPage() {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState<DeckVisibility>('PRIVATE');
  const [cards, setCards] = useState<Card[]>([
    { sides: [{ text: '' }, { text: '' }] },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  return (
    <>
      <Backdrop open={submitting} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AppBarWithBackButton title="Add deck" />
      <Container>
        <EditDeckForm
          title={title}
          description={description}
          visibility={visibility}
          cards={cards}
          onTitleChange={setTitle}
          onDescriptionChange={setDescription}
          onChangeVisibility={setVisibility}
          onCardsChange={setCards}
          onSubmit={() => {
            setSubmitting(true);
            decksService
              .create({ title, description, visibility, cards, tags: [] })
              .then(() => history.goBack())
              .catch(() => {
                setSubmitting(false);
              });
          }}
        />
      </Container>
    </>
  );
}
