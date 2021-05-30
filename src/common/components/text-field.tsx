import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@material-ui/core';
import useUniqueId from '../hooks/use-unique-id';

export interface TextFieldProps extends Omit<MuiTextFieldProps, 'label'> {
  label?: string;
}

export default function TextField(props: TextFieldProps) {
  const id = useUniqueId();
  return <MuiTextField id={id} {...props} />;
}
