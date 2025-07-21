import { render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';

import CharacterList from './character-list';

describe('Character list', () => {
  describe('Render tests', () => {
    it('Should render character list', () => {
      const { container } = render(<CharacterList character={characterMock[0]} />);
      expect(container).toBeInTheDocument();
    });
  });
});
