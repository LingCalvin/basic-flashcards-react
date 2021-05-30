import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField, TextFieldProps } from '@material-ui/core';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import useStyles from './form.styles';

export type FormValues = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

const schema = yup.object().shape({
  currentPassword: yup.string().label('Current password').required(),
  newPassword: yup.string().label('New password').required().min(8),
  confirmNewPassword: yup
    .string()
    .label('Confirm password')
    .required()
    .oneOf(
      [yup.ref('newPassword'), null],
      'Confirm new password must match new password must match'
    ),
});

interface ChangePasswordFormProps {
  variant?: TextFieldProps['variant'];
  onSubmit: SubmitHandler<FormValues>;
}

export default function ChangePasswordForm({
  variant,
  onSubmit,
}: ChangePasswordFormProps) {
  const classes = useStyles();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  return (
    <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Current password"
        type="password"
        variant={variant}
        inputProps={{
          'aria-label': 'Current password',
          ...register('currentPassword'),
        }}
        error={errors.currentPassword !== undefined}
        helperText={errors.currentPassword?.message}
      />
      <TextField
        label="New password"
        type="password"
        variant={variant}
        inputProps={{
          'aria-label': 'New password',
          ...register('newPassword'),
        }}
        error={errors.newPassword !== undefined}
        helperText={errors.newPassword?.message}
      />
      <TextField
        label="Confirm new password"
        type="password"
        variant={variant}
        inputProps={{
          'aria-label': 'Confirm new password',
          ...register('confirmNewPassword'),
        }}
        error={errors.confirmNewPassword !== undefined}
        helperText={errors.confirmNewPassword?.message}
      />
      <div style={{ marginLeft: 'auto' }}>
        <Button type="submit" variant="contained" color="primary">
          Save
        </Button>
      </div>
    </form>
  );
}
