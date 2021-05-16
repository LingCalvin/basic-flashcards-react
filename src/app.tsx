import { useState } from 'react';
import { AuthenticationStatusUpdateContext } from './auth/contexts/authentication-status-update.context';
import { AuthenticationStatusContext } from './auth/contexts/authentication-status.context';
import AuthenticationStatus from './auth/interfaces/authentication-status';
import { LogInResponse } from './auth/interfaces/log-in-response';
import Router from './router';

export default function App() {
  const [authenticationStatus, setAuthenticatinStatus] = useState({
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
    setAuthenticatinStatus((state) => ({ ...state, ...update }));
  };

  return (
    <AuthenticationStatusContext.Provider value={authenticationStatus}>
      <AuthenticationStatusUpdateContext.Provider
        value={updateAuthenticationStatus}
      >
        <Router isAuthenticated={authenticationStatus.loggedIn} />
      </AuthenticationStatusUpdateContext.Provider>
    </AuthenticationStatusContext.Provider>
  );
}
