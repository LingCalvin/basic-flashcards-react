import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import paths from './common/constants/paths';
import DashboardPage from './dashboard/pages/dashboard.page';
import HomePage from './dashboard/pages/home.page';

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
      </Switch>
    </HashRouter>
  );
}
