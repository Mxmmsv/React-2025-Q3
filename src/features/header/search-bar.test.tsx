import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { describe, it, expect, beforeEach, vi } from 'vitest';

import { mockApiRoot } from '@/api/__mocks__/api.mock';

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
  });
});
