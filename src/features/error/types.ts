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

type ErrorButtonState = {
  hasError: boolean;
  error: Error | null;
};

export type { ErrorFallbackProps, ErrorBoundaryState, ErrorBoundaryProps, ErrorButtonState };
