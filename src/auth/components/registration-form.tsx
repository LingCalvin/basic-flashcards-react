import { Button } from '@material-ui/core';
import useStyles from './form.styles';
import routes from '../../router/constants/routes';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField, { TextFieldProps } from '../../common/components/text-field';

export type FormValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  username: yup.string().label('Username').required(),
  password: yup.string().label('Password').required().min(8),
  confirmPassword: yup
    .string()
    .label('Confirm password')
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

interface RegistrationFormProps {
  variant?: TextFieldProps['variant'];
  onSubmit: (value: FormValues) => void;
}

export default function RegistrationForm({
  variant,
  onSubmit,
}: RegistrationFormProps) {
  const classes = useStyles();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        variant={variant}
        inputProps={register('username')}
        error={errors.username !== undefined}
        helperText={errors.username?.message}
      />
      <TextField
        label="Password"
        type="password"
        variant={variant}
        inputProps={register('password')}
        error={errors.password !== undefined}
        helperText={errors.password?.message}
      />
      <TextField
        label="Confirm password"
        type="password"
        variant={variant}
        inputProps={register('confirmPassword')}
        error={errors.confirmPassword !== undefined}
        helperText={errors.confirmPassword?.message}
      />
      <div className={classes.submitOrAltRow}>
        <Button component={Link} to={routes.login} color="primary">
          Log in
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </div>
    </form>
  );
}
