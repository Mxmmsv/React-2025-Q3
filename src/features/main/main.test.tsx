import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import characterMock from './__tests__/character-mock';
import Main from './main';

describe('Main', () => {
  describe('Render tests', () => {
    it('Should render main', () => {
      const { container } = render(<Main characters={[characterMock]} isLoading={false} />);
      expect(container).toBeInTheDocument();
    });

    it('Should render isLoading', () => {
      render(<Main characters={[]} isLoading={true} />);
      expect(screen.getByText(/PLEASE WAIT/i)).toBeInTheDocument();
    });
  });
});
