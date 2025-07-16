import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Header from './header';

describe('Header', () => {
  describe('Render tests', () => {
    it('Should render header', () => {
      const { container } = render(<Header onSearch={() => {}} />);

      expect(container).toBeInTheDocument();
    });

    it('Should render logo image for header', () => {
      render(<Header onSearch={() => {}} />);
      const logo = screen.getByRole('img');

      expect(logo).toBeInTheDocument();
    });
  });
});
