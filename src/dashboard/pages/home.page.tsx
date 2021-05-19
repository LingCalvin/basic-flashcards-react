import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { useContext, useEffect, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { useHistory } from 'react-router';
import { googleClientId } from '../../auth/configs/auth.config';
import { AuthenticationStatusUpdateContext } from '../../auth/contexts/authentication-status-update.context';
import { authService } from '../../auth/services/auth.service';
import paths from '../../common/constants/paths';
import Deck from '../../deck/interfaces/deck';
import { decksService } from '../../deck/services/decks.service';
import AppBar from '../components/app-bar';
import DeckInfoTile from '../components/deck-info-tile';
import useStyles from './home.page.styles';

export default function HomePage() {
  const classes = useStyles();
  const [loggingIn, setLoggingIn] = useState(false);
  const updateAuthenticationStatus = useContext(
    AuthenticationStatusUpdateContext
  );

  const history = useHistory();

  const [exampleDecks, setExampleDecks] = useState<Deck[]>([]);

  useEffect(() => {
    decksService
      .findAll({ orderTitleBy: 'asc', take: 3 })
      .then(({ decks }) => setExampleDecks(decks));
  }, []);

  return (
    <div>
      <Backdrop className={classes.backDrop} open={loggingIn}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AppBar />
      <main>
        <div className={classes.loginSection}>
          <Typography variant="h1">Log in to create decks.</Typography>
          <GoogleLogin
            clientId={googleClientId}
            responseType="id_token"
            onRequest={() => setLoggingIn(true)}
            onSuccess={(res) => {
              authService
                .logIn((res as GoogleLoginResponse).tokenId)
                .then(() => updateAuthenticationStatus({ loggedIn: true }))
                .finally(() => setLoggingIn(false));
            }}
            onFailure={() => setLoggingIn(false)}
          />
        </div>
        <div className={classes.exampleDecksSection}>
          <Typography variant="h2">Decks</Typography>
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
        </div>
      </main>
    </div>
  );
}
