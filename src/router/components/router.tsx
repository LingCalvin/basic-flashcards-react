import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../../auth/pages/login.page';
import RegistrationPage from '../../auth/pages/registration.page';
import routes from '../constants/routes';
import DashboardPage from '../../dashboard/pages/dashboard.page';
import HomePage from '../../dashboard/pages/home.page';
import AddDeckPage from '../../deck/pages/add-deck.page';
import DeckPage from '../../deck/pages/deck.page';
import ProtectedRoute from './protected-route';
import { useContext } from 'react';
import CredentialsContext from '../../auth/contexts/credentials.context';
import EditDeckPage from '../../deck/pages/edit-deck.page';

export default function Router() {
  const credentials = useContext(CredentialsContext);
  return (
    <HashRouter>
      <Switch>
        <Route exact path={routes.home}>
          {credentials ? <Redirect to={routes.dashboard} /> : <HomePage />}
        </Route>
        <ProtectedRoute path={routes.dashboard}>
          <DashboardPage />
        </ProtectedRoute>
        <Route exact path={routes.deckView}>
          <DeckPage />
        </Route>
        <ProtectedRoute path={routes.deckAdd}>
          <AddDeckPage />
        </ProtectedRoute>
        <ProtectedRoute path={routes.deckEdit}>
          <EditDeckPage />
        </ProtectedRoute>
        <Route path={routes.registration}>
          <RegistrationPage />
        </Route>
        <Route path={routes.login}>
          <LoginPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
