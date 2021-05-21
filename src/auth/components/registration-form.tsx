import { Button, TextFieldProps } from '@material-ui/core';
import { useState } from 'react';
import ValidatedTextField from '../../common/components/validated-text-field';
import missingRequiredFieldErrorMessage from '../../common/constants/missing-required-field-error-message';
import useStyles from './form.styles';
import validator from 'validator';

interface RegistrationFormProps {
  username: string;
  password: string;
  confirmPassword: string;
  onChangeUsername: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;

  onChangePassword: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  onChangeConfirmPassword: React.ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  >;
  textFieldVariant?: TextFieldProps['variant'];
  onSubmit: () => void;
}

export default function RegistrationForm({
  username,
  password,
  confirmPassword,
  onChangeUsername,
  onChangePassword,
  onChangeConfirmPassword,
  textFieldVariant = 'outlined',
  onSubmit,
}: RegistrationFormProps) {
  const classes = useStyles();

  const [forceValidate, setForceValidate] = useState(false);

  const validateRequired = (value: string) =>
    validator.isEmpty(value) ? missingRequiredFieldErrorMessage : undefined;

  const validateConfirmPassword = (value: string) =>
    value !== password ? 'Passwords do not match.' : undefined;

  return (
    <form
      className={classes.form}
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setForceValidate(true);
        if (
          [username, password].some(validateRequired) ||
          validateConfirmPassword(confirmPassword)
        ) {
          return;
        }
        onSubmit();
      }}
    >
      <ValidatedTextField
        variant={textFieldVariant}
        label="Username"
        forceValidate={forceValidate}
        onValidate={validateRequired}
        required
        value={username}
        onChange={onChangeUsername}
      />
      <ValidatedTextField
        variant={textFieldVariant}
        label="Password"
        type="password"
        required
        value={password}
        onChange={onChangePassword}
        forceValidate={forceValidate}
        onValidate={validateRequired}
      />
      <ValidatedTextField
        variant={textFieldVariant}
        label="Confirm password"
        type="password"
        required
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        forceValidate={forceValidate}
        onValidate={validateConfirmPassword}
      />
      <Button
        className={classes.submitButton}
        type="submit"
        variant="contained"
        color="primary"
      >
        Register
      </Button>
    </form>
  );
}
