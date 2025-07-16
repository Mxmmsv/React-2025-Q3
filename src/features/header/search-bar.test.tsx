import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';

import SearchBar from './search-bar';

describe('Search bar', () => {
  beforeEach(() => {
    render(<SearchBar onSearch={() => {}} />);
  });

  it('should render search input', () => {
    const input = screen.getByPlaceholderText(/please write smth/i);
    expect(input).toBeInTheDocument();
  });

  it('should render submit button', () => {
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
