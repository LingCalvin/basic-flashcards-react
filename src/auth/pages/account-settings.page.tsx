import { Avatar, Paper, Snackbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import { autoHideDuration } from '../../common/constants/snackbar';
import ChangePasswordForm from '../components/change-password-form';
import CredentialsContext from '../contexts/credentials.context';
import { authService } from '../services/auth.service';
import useStyles from './account-settings.page.styles';

export default function AccountSettings() {
  const classes = useStyles();
  const credentials = useContext(CredentialsContext);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  return (
    <div className={classes.root}>
      <Typography variant="h1">Account Settings</Typography>
      <Paper className={clsx(classes.section, classes.generalInfo)}>
        <Avatar className={classes.avatar}>
          <Typography
            className={classes.avatarText}
            variant="h1"
            component="div"
          >
            {credentials?.username.substring(0, 1).toLocaleUpperCase()}
          </Typography>
        </Avatar>
        <Typography variant="h2" component="div">
          {credentials?.username.toLocaleUpperCase()}
        </Typography>
      </Paper>
      <Paper component="section" className={classes.section}>
        <Typography variant="h2">Security</Typography>
        <section className={classes.subsection}>
          <Typography variant="h3">Change password</Typography>
          <ChangePasswordForm
            variant="outlined"
            onSubmit={(value) =>
              authService
                .changePassword(value.currentPassword, value.newPassword)
                .catch((e) => {
                  if (e?.response?.status === 403) {
                    setSnackbarMessage(
                      'Failed to change password. Incorrect password.'
                    );
                  } else {
                    setSnackbarMessage(
                      'An error has occurred. Failed to change password.'
                    );
                  }
                  setShowSnackbar(true);
                })
            }
          />
        </section>
      </Paper>
      <Snackbar
        open={showSnackbar}
        message={snackbarMessage}
        autoHideDuration={autoHideDuration}
        onClose={() => setShowSnackbar(false)}
      />
    </div>
  );
}
