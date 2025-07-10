import type { ErrorInfo, ReactNode } from 'react';

type ErrorFallbackProps = {
  onReset: () => void;
  error: Error;
  errorInfo: ErrorInfo;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
};

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback: (error: Error, info: ErrorInfo) => ReactNode;
};

type ErrorButtonState = {
  hasError: boolean;
  error: Error | null;
};

export type { ErrorFallbackProps, ErrorBoundaryState, ErrorBoundaryProps, ErrorButtonState };
