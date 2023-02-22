import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';
import { routes } from './routes';

export const RestrictedRoute = ({
  component: Component,
  redirectTo = routes.home,
}) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
