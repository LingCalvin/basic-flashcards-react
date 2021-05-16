import { Backdrop, CircularProgress, Typography } from '@material-ui/core';
import { useContext, useState } from 'react';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import { googleClientId } from '../../auth/configs/auth.config';
import { AuthenticationStatusUpdateContext } from '../../auth/contexts/authentication-status-update.context';
import { authService } from '../../auth/services/auth.service';
import AppBar from '../components/app-bar';
import useStyles from './home.page.styles';

export default function HomePage() {
  const classes = useStyles();
  const [loggingIn, setLoggingIn] = useState(false);
  const updateAuthenticationStatus = useContext(
    AuthenticationStatusUpdateContext
  );
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
      </main>
    </div>
  );
}
