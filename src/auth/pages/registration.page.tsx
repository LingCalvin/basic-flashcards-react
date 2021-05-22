import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import { useHistory } from 'react-router';
import AppBarWithBackButton from '../../common/components/app-bar-with-back-button';
import routes from '../../router/constants/routes';
import useTextFieldValue from '../../common/hooks/use-text-field-value';
import userService from '../../user/services/user.service';
import RegistrationForm from '../components/registration-form';
import useStyles from './registration.page.styles';

export default function RegistrationPage() {
  const classes = useStyles();
  const [username, onChangeUsername] = useTextFieldValue('');
  const [password, onChangePassword] = useTextFieldValue('');
  const [confirmPassword, onChangeConfirmPassword] = useTextFieldValue('');
  const [serverError, setServerError] = useState('');
  const history = useHistory();
  return (
    <div>
      <AppBarWithBackButton title="Basic Flashcards" />
      <Container className={classes.content}>
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <RegistrationForm
          username={username}
          password={password}
          confirmPassword={confirmPassword}
          onChangeUsername={onChangeUsername}
          onChangePassword={onChangePassword}
          onChangeConfirmPassword={onChangeConfirmPassword}
          onSubmit={() => {
            userService
              .create({ username, password })
              .then(() => history.push(routes.login))
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
