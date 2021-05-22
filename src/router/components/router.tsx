import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../../auth/pages/login.page';
import RegistrationPage from '../../auth/pages/registration.page';
import { authService } from '../../auth/services/auth.service';
import routes from '../constants/routes';
import DashboardPage from '../../dashboard/pages/dashboard.page';
import HomePage from '../../dashboard/pages/home.page';
import AddDeckPage from '../../deck/pages/add-deck.page';
import DeckPage from '../../deck/pages/deck.page';
import ProtectedRoute from './protected-route';

export default function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={routes.home}>
          {!authService.isAuthenticated() ? (
            <HomePage />
          ) : (
            <Redirect to={routes.dashboard} />
          )}
        </Route>
        <ProtectedRoute path={routes.dashboard}>
          <DashboardPage userId={authService.getCurrentUser() as string} />
        </ProtectedRoute>
        <Route exact path={routes.deckView}>
          <DeckPage />
        </Route>
        <ProtectedRoute path={routes.deckEdit}>
          <AddDeckPage />
        </ProtectedRoute>
        <ProtectedRoute path={routes.deckAdd}>
          <AddDeckPage />
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
