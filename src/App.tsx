import './styles/global.css';

import { Spinner } from 'evergreen-ui';
import React, { Suspense } from 'react';

import ContextsProvider from './contexts/ContextsProvider';
import useApiEndpointTracking from './hooks/useApiEndpointTracking';
import Router from './route/Router';

function App() {
  useApiEndpointTracking()

  return (
    <main className="App">
      <ContextsProvider>
        <Suspense fallback={<Spinner />}>
          <Router />
        </Suspense>
      </ContextsProvider>
    </main>
  );
}

export default App;
