import './styles/global.css';

import { Spinner } from 'evergreen-ui';
import React, { Suspense } from 'react';

import useApiEndpointTracking from './hooks/useApiEndpointTracking';
import Router from './route/Router';

function App() {
  useApiEndpointTracking()

  return (
    <main className="App">
      <Suspense fallback={<Spinner />}>
        <Router />
      </Suspense>
    </main>
  );
}

export default App;
