import { render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';

import CharacterList from './character-list';

describe('Character list', () => {
  describe('Cender tests', () => {
    it('Should render character list', () => {
      const { container } = render(<CharacterList {...characterMock[0]} />);
      expect(container).toBeInTheDocument();
    });
  });
});
