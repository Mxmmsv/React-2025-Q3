import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';

import Header from './header';

describe('Header', () => {
  describe('Render tests', () => {
    it('Should render header', () => {
      const { container } = render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );

      expect(container).toBeInTheDocument();
    });

    it('Should render logo image for header', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
      const logo = screen.getByRole('img');

      expect(logo).toBeInTheDocument();
    });
  });
});
