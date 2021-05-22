import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import routes from '../../router/constants/routes';
import useTextFieldValue from '../../common/hooks/use-text-field-value';
import LoginForm from '../components/login-form';
import { AuthenticationStatusUpdateContext } from '../contexts/authentication-status-update.context';
import { authService } from '../services/auth.service';
import useStyles from './login.page.styles';

export default function LoginPage() {
  const classes = useStyles();
  const [username, onChangeUsername] = useTextFieldValue('');
  const [password, onChangePassword] = useTextFieldValue('');

  const [serverError, setServerError] = useState('');

  const updateAuthenticationStatus = useContext(
    AuthenticationStatusUpdateContext
  );

  const history = useHistory();
  const { search } = useLocation();
  const redirectURL =
    new URLSearchParams(search).get('continue') ?? routes.dashboard;

  if (authService.isAuthenticated()) {
    return <Redirect to={redirectURL} />;
  }

  return (
    <div>
      <AppBarWithBackButton title="Basic Flashcards" />
      <Container className={classes.content}>
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <LoginForm
          variant="outlined"
          username={username}
          password={password}
          onChangeUsername={onChangeUsername}
          onChangePassword={onChangePassword}
          onSubmit={() => {
            authService
              .logIn(username, password)
              .then(() => updateAuthenticationStatus({ loggedIn: true }))
              .then(() => history.push(redirectURL))
              .catch((e) => {
                if (e.response) {
                  setServerError(e.response?.data?.message);
                } else {
                  setServerError('An error has occurred.');
                }
              });
          }}
        />
      </Container>
    </div>
  );
}
