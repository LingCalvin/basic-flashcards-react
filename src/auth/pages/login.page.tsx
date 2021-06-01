import { Container, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useContext, useState } from 'react';
import { useLocation } from 'react-router';
import { Redirect } from 'react-router-dom';
import routes from '../../router/constants/routes';
import LoginForm from '../components/login-form';
import { authService } from '../services/auth.service';
import useStyles from './login.page.styles';
import CredentialsContext from '../contexts/credentials.context';
import Page from '../../common/components/page';

export default function LoginPage() {
  const credentials = useContext(CredentialsContext);
  const classes = useStyles();

  const [serverError, setServerError] = useState('');

  const { search } = useLocation();
  const redirectURL =
    new URLSearchParams(search).get('continue') ?? routes.dashboard;

  if (credentials) {
    return <Redirect to={redirectURL} />;
  }

  return (
    <Page
      title="Login"
      skipLinks={[{ fragment: 'content', text: 'Skip to content' }]}
    >
      <Container id="content" className={classes.content} component="main">
        <Typography variant="h1">Log in</Typography>
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <LoginForm
          variant="outlined"
          onSubmit={(value) => {
            authService.logIn(value.username, value.password).catch((e) => {
              if (e.response) {
                setServerError(e.response?.data?.message);
              } else {
                setServerError('An error has occurred.');
              }
            });
          }}
        />
      </Container>
    </Page>
  );
}
