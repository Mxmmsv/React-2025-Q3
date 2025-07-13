import { Component } from 'react';

import apiRoot from '@/api/api';
import Button from '@/components/button';

import type { ErrorButtonState } from './types';

class ErrorButton extends Component<unknown, ErrorButtonState> {
  state = {
    hasError: false,
    error: null,
  };

  handleClick = async () => {
    try {
      await apiRoot().error();
    } catch (error) {
      if (error instanceof Error) {
        this.setState({ hasError: true, error: error });
      }
    }
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      throw error;
    }

    return <Button onClick={this.handleClick}>ERROR BUTTON</Button>;
  }
}

export default ErrorButton;
