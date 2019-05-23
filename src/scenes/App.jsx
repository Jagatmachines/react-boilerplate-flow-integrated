import React, { Component } from 'react';
import type { IAppProps } from './App.types';
import ErrorBoundary from './components/ErrorBoundaries';
import MainRoutes from './routes';

class App extends Component<IAppProps> {
  render() {
    return (
      <ErrorBoundary>
        <MainRoutes />
      </ErrorBoundary>
    );
  }
}

export default App;
