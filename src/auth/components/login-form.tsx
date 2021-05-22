import { useState } from 'react';
import ValidatedTextField from '../../common/components/validated-text-field';
import validator from 'validator';
import missingRequiredFieldErrorMessage from '../../common/constants/missing-required-field-error-message';
import useStyles from './form.styles';
import { Button, TextFieldProps } from '@material-ui/core';
import routes from '../../router/constants/routes';
import { Link } from 'react-router-dom';

interface LoginFormProps {
  variant?: TextFieldProps['variant'];
  username: string;
  password: string;
  onChangeUsername: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onChangePassword: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onSubmit: () => void;
}

export default function LoginForm({
  variant = 'outlined',
  username,
  password,
  onChangeUsername,
  onChangePassword,
  onSubmit,
}: LoginFormProps) {
  const classes = useStyles();

  const [forceValidate, setForceValidate] = useState(false);

  const validateRequired = (value: string) =>
    validator.isEmpty(value) ? missingRequiredFieldErrorMessage : undefined;

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setForceValidate(true);
        if ([username, password].some(validateRequired)) {
          return;
        }

        onSubmit();
      }}
    >
      <ValidatedTextField
        label="Username"
        value={username}
        onChange={onChangeUsername}
        onValidate={validateRequired}
        forceValidate={forceValidate}
        variant={variant}
        required
      />
      <ValidatedTextField
        label="Password"
        value={password}
        onChange={onChangePassword}
        onValidate={validateRequired}
        forceValidate={forceValidate}
        variant={variant}
        type="password"
        required
      />
      <div className={classes.submitOrAltRow}>
        <Button component={Link} to={routes.registration} color="primary">
          Create account
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Log in
        </Button>
      </div>
    </form>
  );
}
