import { Redirect, RouteProps, useLocation } from 'react-router';
import { Route } from 'react-router-dom';
import { authService } from '../../auth/services/auth.service';
import routes from '../constants/routes';

interface ProtectedRouteProps extends RouteProps {
  path: string;
}

export default function ProtectedRoute(props: ProtectedRouteProps) {
  const { pathname } = useLocation();
  return authService.isAuthenticated() ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: routes.login,
        search: `?continue=${encodeURIComponent(pathname)}`,
      }}
    />
  );
}
