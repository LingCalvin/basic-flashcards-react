import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import paths from '../../common/constants/paths';
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
              .then(() => history.push(paths.dashboard))
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
