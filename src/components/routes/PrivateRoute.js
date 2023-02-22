import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { routes } from './routes';

export const PrivateRoute = ({
  component: Component,
  redirectTo = routes.home,
}) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
