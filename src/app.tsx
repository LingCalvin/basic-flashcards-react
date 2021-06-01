import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CredentialsContext from './auth/contexts/credentials.context';
import Credentials from './auth/interfaces/credentials';
import { retrieve } from './auth/utils/credentials.utils';
import RouterSwitch from './router/components/router-switch';
import theme from './theme';

export default function App() {
  const [credentials, setCredentials] = useState<Credentials | null>(retrieve);

  useEffect(() => {
    const syncCredentials = () => {
      setCredentials(retrieve);
    };
    document.addEventListener('localStorageServiceChange', syncCredentials);
    return () =>
      document.removeEventListener(
        'localStorageServiceChange',
        syncCredentials
      );
  }, []);

  return (
    <>
      <CredentialsContext.Provider value={credentials}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterSwitch />
        </ThemeProvider>
      </CredentialsContext.Provider>
    </>
  );
}
