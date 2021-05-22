import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import routes from '../../router/constants/routes';
import useTextFieldValue from '../../common/hooks/use-text-field-value';
import LoginForm from '../components/login-form';
import { authService } from '../services/auth.service';
import useStyles from './login.page.styles';
import CredentialsContext from '../contexts/credentials.context';

export default function LoginPage() {
  const credentials = useContext(CredentialsContext);
  const classes = useStyles();
  const [username, onChangeUsername] = useTextFieldValue('');
  const [password, onChangePassword] = useTextFieldValue('');

  const [serverError, setServerError] = useState('');

  const { search } = useLocation();
  const redirectURL =
    new URLSearchParams(search).get('continue') ?? routes.dashboard;

  if (credentials) {
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
            authService.logIn(username, password).catch((e) => {
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
