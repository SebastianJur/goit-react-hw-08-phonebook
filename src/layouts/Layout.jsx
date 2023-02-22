import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../components/AppBar/AppBar';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

export const Layout = () => (
  <Container maxWidth="md">
    <AppBar />
    <Suspense
      fallback={
        <div
          style={{
            width: '100%',
            height: 'calc(100vh - 64px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
          }}
        >
          <CircularProgress />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
);
