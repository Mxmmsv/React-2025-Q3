import { Component } from 'react';

import Button from '@/components/button';
import HttpStatusCode from '@/utils/http-status-code';

import type { ErrorFallbackProps } from './types';

class ErrorFallback extends Component<ErrorFallbackProps> {
  render() {
    const { onReset, error } = this.props;
    return (
      <div
        className={
          'bg-main-background flex min-h-screen flex-col items-center justify-center gap-10 bg-repeat p-5'
        }
        style={{
          backgroundImage: `url('./background/rick-head.svg'), url('./background/morty-head.svg')`,
          backgroundPosition: '0 0, 50px 50px',
        }}
      >
        <div>
          <img
            src="./Rick_and_Morty.svg"
            alt="Rick and Morty logo"
            loading="lazy"
            decoding="async"
            className="h-32 w-full [filter:drop-shadow(0_0_0_var(--color-muted-hero))] transition duration-300 hover:[filter:drop-shadow(0_0_1rem_var(--color-muted-hero))]"
          />
        </div>
        <div className="border-muted-hero bg-background text-destructive w-full overflow-x-auto rounded-md border p-4 text-left text-xl whitespace-pre-wrap">
          {error.message === HttpStatusCode.NOT_FOUND.toString() && (
            <>
              <p>Error 404</p>
              <p>please write correct query</p>
              <p>Your current query: {localStorage.getItem('INPUT-VALUE')}</p>
            </>
          )}
        </div>
        <Button onClick={onReset} className="w-full">
          Reset
        </Button>
      </div>
    );
  }
}

export default ErrorFallback;
