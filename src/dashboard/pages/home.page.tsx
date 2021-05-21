import { Button, Typography } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import LoadableComponent from '../../common/components/loadable-component';
import paths from '../../common/constants/paths';
import Deck from '../../deck/interfaces/deck';
import { decksService } from '../../deck/services/decks.service';
import AppBar from '../components/app-bar';
import DeckInfoTile from '../components/deck-info-tile';
import useStyles from './home.page.styles';

export default function HomePage() {
  const classes = useStyles();

  const [loading, setLoading] = useState(true);

  const [exampleDecks, setExampleDecks] = useState<Deck[]>([]);

  const history = useHistory();

  useEffect(() => {
    decksService
      .findAll({ orderTitleBy: 'asc', take: 3 })
      .then(({ decks }) => setExampleDecks(decks))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <AppBar />
      <main>
        <div className={classes.loginSection}>
          <Typography variant="h1">Log in or create a new account.</Typography>
          <div className={classes.buttonBox}>
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to={paths.login}
            >
              Log in
            </Button>
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to={paths.registration}
            >
              Register
            </Button>
          </div>
        </div>
        <div className={classes.exampleDecksSection}>
          <Typography variant="h2">Decks</Typography>
          <LoadableComponent loading={loading}>
            <div className={classes.exampleDecksContainer}>
              {exampleDecks.map((deck) => (
                <DeckInfoTile
                  key={deck.id}
                  deckId={deck.id ?? ''}
                  title={deck.title}
                  numberOfCards={deck.cards.length}
                  author={deck.authorId ?? ''}
                  onClick={() => history.push(`${paths.decks}/${deck.id}`)}
                />
              ))}
            </div>
          </LoadableComponent>
        </div>
      </main>
    </div>
  );
}
