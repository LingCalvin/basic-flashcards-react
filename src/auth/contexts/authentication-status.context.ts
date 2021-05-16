import { createContext } from 'react';
import AuthenticationStatus from '../interfaces/authentication-status';

export const AuthenticationStatusContext = createContext<AuthenticationStatus>({
  loggedIn: false,
});
