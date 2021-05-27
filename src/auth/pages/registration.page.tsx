import { Container } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import { useHistory } from 'react-router';
import routes from '../../router/constants/routes';
import userService from '../../user/services/user.service';
import RegistrationForm from '../components/registration-form';
import useStyles from './registration.page.styles';

export default function RegistrationPage() {
  const classes = useStyles();

  const [serverError, setServerError] = useState('');
  const history = useHistory();
  return (
    <div>
      <Container className={classes.content}>
        {serverError && <Alert severity="error">{serverError}</Alert>}
        <RegistrationForm
          variant="outlined"
          onSubmit={(value) => {
            userService
              .create(value)
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
