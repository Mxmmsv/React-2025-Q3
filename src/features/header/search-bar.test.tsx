import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';

import SearchBar from './search-bar';

const onSearchMock = vi.fn();

vi.mock('@/api/api', () => ({
  default: () => ({
    search: onSearchMock,
  }),
}));

describe('Search bar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Render tests', () => {
    it('Should render search input', () => {
      render(<SearchBar onSearch={onSearchMock} />);
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toBeInTheDocument();
    });

    it('Should render submit button', () => {
      render(<SearchBar onSearch={onSearchMock} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });

    it('Should display an empty search query on mount', () => {
      render(<SearchBar onSearch={onSearchMock} />);
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toHaveValue('');
    });

    it('Should display previously saved search query from localStorage on mount', () => {
      localStorage.setItem('INPUT-VALUE', 'Hello World!');
      render(<SearchBar onSearch={onSearchMock} />);
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toHaveValue('Hello World!');
    });
  });

  describe('User interaction tests', () => {
    it('Should save typed value to localStorage and restore it on next render', async () => {
      const user = userEvent.setup();
      const component = render(<SearchBar onSearch={onSearchMock} />);

      const input = screen.getByPlaceholderText(/please write smth/i);
      const button = screen.getByRole('button');

      await user.click(input);
      await user.type(input, 'Hello World!');
      await user.click(button);

      expect(localStorage.getItem('INPUT-VALUE')).toBe('Hello World!');

      component.unmount();

      render(<SearchBar onSearch={onSearchMock} />);
      const newInput = screen.getByPlaceholderText(/please write smth/i);

      expect(newInput).toHaveValue('Hello World!');
    });

    it('Should call onSearch with succesfull result from API', async () => {
      onSearchMock.mockResolvedValue(['Rick']);
      const user = userEvent.setup();
      render(<SearchBar onSearch={onSearchMock} />);

      const input = screen.getByPlaceholderText(/please write smth/i);
      const button = screen.getByRole('button');

      await user.click(input);
      await user.type(input, 'Rick');
      await user.click(button);

      await waitFor(() => {
        expect(onSearchMock).toHaveBeenCalledWith(['Rick'], false);
      });
    });

    it('Should render error boundary fallback when api return error', async () => {
      onSearchMock.mockRejectedValue(new Error('404'));
      const user = userEvent.setup();
      render(
        <ErrorBoundary
          fallback={(error, handleReset) => <ErrorFallback onReset={handleReset} error={error} />}
        >
          <SearchBar onSearch={onSearchMock} />
        </ErrorBoundary>
      );

      const input = screen.getByPlaceholderText(/please write smth/i);
      const button = screen.getByRole('button');

      await user.click(input);
      await user.type(input, 'Hello world!');
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText(/Error 404 - not found/i)).toBeInTheDocument();
      });
    });
  });
});
