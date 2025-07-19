import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, afterEach, vi, type Mock } from 'vitest';

import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';

import ErrorButton from './error-button';

describe('ErrorButton', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Should render button with correct text', () => {
    render(<ErrorButton />);
    expect(screen.getByRole('button', { name: /error button/i })).toBeInTheDocument();
  });

  it('Should throw error and render ErrorFallback when API fails', async () => {
    (fetch as Mock).mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    const user = userEvent.setup();

    render(
      <ErrorBoundary
        fallback={(error, handleReset) => <ErrorFallback error={error} onReset={handleReset} />}
      >
        <ErrorButton />
      </ErrorBoundary>
    );

    const button = screen.getByRole('button', { name: /error button/i });

    await user.click(button);

    await waitFor(() => {
      expect(screen.getByText(/Error 404 - not found/i)).toBeInTheDocument();
    });
  });
});
