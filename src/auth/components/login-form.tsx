import useStyles from './form.styles';
import { Button, TextField, TextFieldProps } from '@material-ui/core';
import routes from '../../router/constants/routes';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export type FormValues = {
  username: string;
  password: string;
};

const schema = yup.object().shape({
  username: yup.string().label('Username').required(),
  password: yup.string().label('Password').required(),
});
interface LoginFormProps {
  variant?: TextFieldProps['variant'];
  onSubmit: (value: FormValues) => void;
}

export default function LoginForm({ variant, onSubmit }: LoginFormProps) {
  const classes = useStyles();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Username"
        variant={variant}
        inputProps={register('username', { required: true })}
        error={errors.username !== undefined}
        helperText={errors.username?.message}
      />
      <TextField
        label="Password"
        type="password"
        variant={variant}
        inputProps={register('password', { required: true })}
        error={errors.password !== undefined}
        helperText={errors.password?.message}
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
