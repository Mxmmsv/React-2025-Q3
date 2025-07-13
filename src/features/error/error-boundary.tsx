import { Component } from 'react';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    localStorage.setItem('INPUT-VALUE', '');
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props.fallback(this.state.error, this.handleReset);
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
