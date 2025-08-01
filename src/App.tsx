import { lazy } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Provider } from 'jotai';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import createCache from '@emotion/cache';

import { store } from '@states/app';

import Dashboard from '@pages/dashboard';
import NavBar from '@components/navbar';
import Notification from '@features/notification';

const Congregations = lazy(() => import('@pages/congregations'));
const Users = lazy(() => import('@pages/users'));
const FeatureFlags = lazy(() => import('@pages/feature_flags'));
const Settings = lazy(() => import('@pages/settings'));

const cache = createCache({
  key: 'css',
  prepend: true,
});

const theme = createTheme({
  typography: {
    allVariants: { fontFamily: 'Inter', lineHeight: 1.3 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { fontFamily: 'Inter' },
        span: { fontFamily: 'Inter !important' },
        text: { fontFamily: 'Inter !important' },
      },
    },
  },
});

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CacheProvider value={cache}>
            <Notification />

            <BrowserRouter>
              <Routes>
                <Route element={<NavBar />}>
                  <Route index element={<Dashboard />} />
                  <Route path="users" element={<Users />} />
                  <Route path="congregations" element={<Congregations />} />
                  <Route path="feature-flags" element={<FeatureFlags />} />
                  <Route path="settings" element={<Settings />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CacheProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
