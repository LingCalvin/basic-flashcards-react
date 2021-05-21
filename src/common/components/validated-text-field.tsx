import { TextField, TextFieldProps } from '@material-ui/core';
import { useState } from 'react';

type ValidatedTextFieldProps = TextFieldProps & {
  onValidate: (value: string) => string | undefined;
  forceValidate?: boolean;
  value: string;
};

export default function ValidatedTextField({
  forceValidate,
  onValidate,
  onChange,
  onBlur,
  ...rest
}: ValidatedTextFieldProps) {
  const [checkValid, setCheckValid] = useState(false);
  const errorMessage = onValidate(rest.value);
  return (
    <TextField
      error={(forceValidate || checkValid) && errorMessage !== undefined}
      helperText={(forceValidate || checkValid) && errorMessage}
      onChange={(e) => {
        setCheckValid(true);
        onChange?.(e);
      }}
      onBlur={(e) => {
        setCheckValid(true);
        onBlur?.(e);
      }}
      {...rest}
    />
  );
}
