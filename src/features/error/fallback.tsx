import { Component } from 'react';

import Button from '@/components/button';
import { cn } from '@/utils/cn';

import type { ErrorFallbackProps } from './types';

class ErrorFallback extends Component<ErrorFallbackProps> {
  render() {
    const { onReset, error, errorInfo } = this.props;
    return (
      <div className={cn('flex flex-col items-center justify-center gap-10', 'rounded-xl')}>
        <Button onClick={onReset} className="w-full">
          Reset
        </Button>
        <div className="border-muted-hero bg-background text-destructive w-full overflow-x-auto rounded-md border p-4 text-left text-sm whitespace-pre-wrap">
          <p>{error.message}</p>
          <p>{errorInfo.componentStack}</p>
        </div>
      </div>
    );
  }
}

export default ErrorFallback;
