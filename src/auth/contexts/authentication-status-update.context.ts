import { createContext } from 'react';
import AuthenticationStatus from '../interfaces/authentication-status';

/** Context for passing a callback to update authentication status. */
export const AuthenticationStatusUpdateContext = createContext<
  (update: Partial<AuthenticationStatus>) => void
>(() => {});
