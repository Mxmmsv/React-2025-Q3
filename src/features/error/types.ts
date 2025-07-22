import type { ReactNode } from 'react';

type ErrorFallbackProps = {
  onReset: () => void;
  error: Error;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: (error: Error, onReset: () => void) => ReactNode;
};

export type { ErrorFallbackProps, ErrorBoundaryState, ErrorBoundaryProps };
