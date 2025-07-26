import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { mockApiRoot, searchMock } from '@/api/__mocks__/api.mock';
import characterMock from '@/api/__mocks__/characters.mock';
import ErrorBoundary from '@/features/error/error-boundary';
import ErrorFallback from '@/features/error/fallback';

import SearchBar from './search-bar';

vi.mock('@/api/api', () => ({
  default: () => mockApiRoot(),
}));

describe('Search bar', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe('Render tests', () => {
    it('Should render search input', () => {
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toBeInTheDocument();
    });

    it('Should render submit button', () => {
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });

    it('Should display an empty search query on mount', () => {
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toHaveValue('');
    });

    it('Should display previously saved search query from localStorage on mount', () => {
      localStorage.setItem('INPUT-VALUE', 'Hello World!');
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toHaveValue('Hello World!');
    });
  });

  describe('User interaction tests', () => {
    it('Should save typed value to localStorage and restore it on next render', async () => {
      const user = userEvent.setup();
      const component = render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );

      const input = screen.getByPlaceholderText(/please write smth/i);
      const button = screen.getByRole('button');

      await user.click(input);
      await user.type(input, 'Hello World!');
      await user.click(button);

      expect(localStorage.getItem('INPUT-VALUE')).toBe('Hello World!');

      component.unmount();

      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );
      const newInput = screen.getByPlaceholderText(/please write smth/i);

      expect(newInput).toHaveValue('Hello World!');
    });

    it('Should call onSearch with successful result from API', async () => {
      searchMock.mockResolvedValue([characterMock[0]]);
      const user = userEvent.setup();
      render(
        <MemoryRouter>
          <SearchBar />
        </MemoryRouter>
      );

      const input = screen.getByPlaceholderText(/please write smth/i);
      const button = screen.getByRole('button');

      await user.click(input);
      await user.type(input, 'Rick');
      await user.click(button);

      await waitFor(() => {
        expect(searchMock).toHaveBeenCalledWith([characterMock[0]], false);
      });
    });

    it('Should render error boundary fallback when api return error', async () => {
      searchMock.mockRejectedValue(new Error('404'));
      const user = userEvent.setup();
      render(
        <ErrorBoundary
          fallback={(error, handleReset) => <ErrorFallback onReset={handleReset} error={error} />}
        >
          <MemoryRouter>
            <SearchBar />
          </MemoryRouter>
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
