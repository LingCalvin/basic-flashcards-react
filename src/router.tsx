import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import paths from './common/constants/paths';
import DashboardPage from './dashboard/pages/dashboard.page';
import HomePage from './dashboard/pages/home.page';
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
          <DashboardPage />
        </Route>
        <Route path={`${paths.decks}/:id`}>
          <DeckPage />
        </Route>
      </Switch>
    </HashRouter>
  );
}
