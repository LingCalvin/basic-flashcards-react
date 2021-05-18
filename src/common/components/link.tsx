import { Link as MuiLink, LinkProps as MuiLinkProps } from '@material-ui/core';
import { ReactNode } from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';

interface LinkProps {
  to: RouterLinkProps['to'];
  color?: MuiLinkProps['color'];
  children?: ReactNode;
}

export default function Link({ to, color, children }: LinkProps) {
  return (
    <MuiLink component={RouterLink} to={to} color={color}>
      {children}
    </MuiLink>
  );
}
