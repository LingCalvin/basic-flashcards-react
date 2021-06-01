import { Paper, Snackbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import { useContext, useState } from 'react';
import Avatar from '../../common/components/avatar';
import Page from '../../common/components/page';
import { autoHideDuration } from '../../common/constants/snackbar';
import useUniqueId from '../../common/hooks/use-unique-id';
import ChangePasswordForm from '../components/change-password-form';
import CredentialsContext from '../contexts/credentials.context';
import { authService } from '../services/auth.service';
import useStyles from './account-settings.page.styles';

export default function AccountSettings() {
  const classes = useStyles();
  const credentials = useContext(CredentialsContext);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const securitySectionId = useUniqueId();

  return (
    <Page
      title="Account settings"
      skipLinks={[
        { fragment: 'content', text: 'Skip to content' },
        { fragment: securitySectionId, text: 'Skip to security' },
      ]}
    >
      <main id="content" className={classes.root}>
        <Typography variant="h1">Account Settings</Typography>
        <Paper className={clsx(classes.section, classes.generalInfo)}>
          <Avatar
            className={classes.avatar}
            typographyClassName={classes.avatarText}
            username={credentials?.username}
          />
          <Typography variant="h2" component="div">
            {credentials?.username.toLocaleUpperCase()}
          </Typography>
        </Paper>
        <Paper
          id={securitySectionId}
          component="section"
          className={classes.section}
        >
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
      </main>
    </Page>
  );
}
