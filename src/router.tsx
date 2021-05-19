import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { authService } from './auth/services/auth.service';
import paths from './common/constants/paths';
import DashboardPage from './dashboard/pages/dashboard.page';
import HomePage from './dashboard/pages/home.page';
import AddDeckPage from './deck/pages/add-deck.page';
import DeckPage from './deck/pages/deck.page';

interface RouterProps {
  isAuthenticated?: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={paths.home}>
          {!isAuthenticated ? <HomePage /> : <Redirect to={paths.dashboard} />}
        </Route>
        <Route path={paths.dashboard}>
          <DashboardPage userId={authService.getCurrentUser() as string} />
        </Route>
        <Route exact path={`${paths.decks}/:id`}>
          <DeckPage />
        </Route>
        <Route path={`${paths.decks}/:id/edit`}>
          <AddDeckPage />
        </Route>
        <Route path={paths.deckAdd}>
          <AddDeckPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
