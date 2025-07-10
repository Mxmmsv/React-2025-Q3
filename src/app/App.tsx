import { Component } from 'react';

import apiRoot from '@/api/api';
import type { Character } from '@/api/types';
import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';
import Header from '@/features/header/header';
import Main from '@/features/main/main';

import type { AppState } from './types';

class App extends Component<unknown, AppState> {
  state = {
    errorBoundaryKey: 0,
    characters: [],
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    if (localStorage.length > 0) {
      const query = localStorage.getItem('INPUT-VALUE') || '';
      try {
        const characters = await apiRoot().search(query);
        this.setState({ characters, isLoading: false });
      } catch (error) {
        this.setState({
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    } else {
      try {
        this.setState({ isLoading: true });
        const characters = await apiRoot().characters();
        this.setState({ characters, isLoading: false });
      } catch (error) {
        this.setState({
          error: error instanceof Error ? error : new Error(String(error)),
        });
      }
    }
  }

  handleReset = () => {
    this.setState((prev) => ({
      errorBoundaryKey: prev.errorBoundaryKey + 1,
    }));
  };

  handleSearch = (characters: Character[]) => {
    this.setState({ characters });
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
          <Header onSearch={this.handleSearch} />
          <Main characters={this.state.characters} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
