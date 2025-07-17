import { render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import characterMock from './__tests__/character-mock';
import CharacterList from './character-list';

describe('Character list', () => {
  describe('Cender tests', () => {
    it('Should render character list', () => {
      const { container } = render(<CharacterList {...characterMock} />);
      expect(container).toBeInTheDocument();
    });
  });
});
