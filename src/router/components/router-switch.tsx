import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../constants/routes';
import ProtectedRoute from './protected-route';
import { lazy, Suspense, useContext } from 'react';
import CredentialsContext from '../../auth/contexts/credentials.context';
import LazyLoadingFallbackPage from '../../common/pages/lazy-loading-fallback.page';

const DashboardPage = lazy(
  () => import('../../dashboard/pages/dashboard.page')
);
const AddDeckPage = lazy(() => import('../../deck/pages/add-deck.page'));
const DeckPage = lazy(() => import('../../deck/pages/deck.page'));
const LoginPage = lazy(() => import('../../auth/pages/login.page'));
const RegistrationPage = lazy(
  () => import('../../auth/pages/registration.page')
);
const HomePage = lazy(() => import('../../dashboard/pages/home.page'));
const EditDeckPage = lazy(() => import('../../deck/pages/edit-deck.page'));
const DeckSearchPage = lazy(() => import('../../deck/pages/deck-search.page'));

export default function RouterSwitch() {
  const credentials = useContext(CredentialsContext);
  return (
    <Suspense fallback={<LazyLoadingFallbackPage />}>
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
        <Route path={routes.deckSearch}>
          <DeckSearchPage />
        </Route>
        <Route path={routes.registration}>
          <RegistrationPage />
        </Route>
        <Route path={routes.login}>
          <LoginPage />
        </Route>
      </Switch>
    </Suspense>
  );
}
