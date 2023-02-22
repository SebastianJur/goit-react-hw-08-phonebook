import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from '../layouts/Layout';
import { PrivateRoute } from './routes/PrivateRoute';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { fetchCurrentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { routes } from './routes/routes';
import CircularProgress from '@mui/material/CircularProgress';

const HomePage = lazy(() => import('pages/Home/Home'));
const RegisterPage = lazy(() => import('pages/Register/Register'));
const LoginPage = lazy(() => import('pages/Login/Login'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isFetchingCurrentUser } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path={routes.register}
          element={
            <RestrictedRoute
              redirectTo={routes.contacts}
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path={routes.login}
          element={
            <RestrictedRoute
              redirectTo={routes.contacts}
              component={<LoginPage />}
            />
          }
        />
        <Route
          path={routes.contacts}
          element={
            <PrivateRoute
              redirectTo={routes.login}
              component={<ContactsPage />}
            />
          }
        />
        <Route path={routes.notFound} element={<Navigate to={routes.home} />} />
      </Route>
    </Routes>
  );
};

export default App;
