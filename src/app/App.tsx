import { Component } from 'react';

import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';

import type { AppState } from './types';
import Wrapper from './wrapper';

class App extends Component<unknown, AppState> {
  state = {
    errorBoundaryKey: 0,
  };

  handleReset = () => {
    this.setState((prev) => ({
      errorBoundaryKey: prev.errorBoundaryKey + 1,
    }));
  };

  render() {
    return (
      <ErrorBoundary
        key={this.state.errorBoundaryKey}
        fallback={(error, errorInfo) => (
          <ErrorFallback onReset={this.handleReset} error={error} errorInfo={errorInfo} />
        )}
      >
        <div
          className="bg-main-background flex min-h-screen flex-col gap-5 bg-repeat p-5"
          style={{
            backgroundImage: `url('./background/rick-head.svg'), url('./background/morty-head.svg')`,
            backgroundPosition: '0 0, 50px 50px',
          }}
        >
          <Wrapper />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
