import { CssBaseline } from '@material-ui/core';
import { useState } from 'react';
import { AuthenticationStatusUpdateContext } from './auth/contexts/authentication-status-update.context';
import { AuthenticationStatusContext } from './auth/contexts/authentication-status.context';
import AuthenticationStatus from './auth/interfaces/authentication-status';
import { LogInResponse } from './auth/interfaces/log-in-response';
import Router from './router/components/router';

export default function App() {
  const [authenticationStatus, setAuthenticationStatus] = useState({
    loggedIn:
      new Date(
        (JSON.parse(
          localStorage.getItem('accessTokenPayload') ?? '{"exp": 0}'
        ) as LogInResponse['decodedAccessToken']).exp * 1000
      ) > new Date(),
  });

  const updateAuthenticationStatus = (
    update: Partial<AuthenticationStatus>
  ) => {
    setAuthenticationStatus((state) => ({ ...state, ...update }));
  };

  return (
    <>
      <CssBaseline />
      <AuthenticationStatusContext.Provider value={authenticationStatus}>
        <AuthenticationStatusUpdateContext.Provider
          value={updateAuthenticationStatus}
        >
          <Router />
        </AuthenticationStatusUpdateContext.Provider>
      </AuthenticationStatusContext.Provider>
    </>
  );
}
