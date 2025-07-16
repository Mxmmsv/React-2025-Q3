import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';

import SearchBar from './search-bar';

describe('Search bar', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('Render tests', () => {
    it('Should render search input', () => {
      render(<SearchBar onSearch={() => {}} />);
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toBeInTheDocument();
    });

    it('Should render submit button', () => {
      render(<SearchBar onSearch={() => {}} />);
      const button = screen.getByRole('button');

      expect(button).toBeInTheDocument();
    });

    it('Should display an empty search query on mount', () => {
      render(<SearchBar onSearch={() => {}} />);
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toHaveValue('');
    });

    it('Should display previously saved search query from localStorage on mount', () => {
      localStorage.setItem('INPUT-VALUE', 'Hello World!');
      render(<SearchBar onSearch={() => {}} />);
      const input = screen.getByPlaceholderText(/please write smth/i);

      expect(input).toHaveValue('Hello World!');
    });
  });

  describe('User interaction tests', () => {
    it('Should render previous search query', async () => {
      const user = userEvent.setup();
      const component = render(<SearchBar onSearch={() => {}} />);

      const input = screen.getByPlaceholderText(/please write smth/i);
      const button = screen.getByRole('button');

      await user.click(input);
      await user.type(input, 'Hello World!');
      await user.click(button);

      expect(localStorage.getItem('INPUT-VALUE')).toBe('Hello World!');

      component.unmount();

      render(<SearchBar onSearch={() => {}} />);
      const newInput = screen.getByPlaceholderText(/please write smth/i);

      expect(newInput).toHaveValue('Hello World!');
    });
  });
});
