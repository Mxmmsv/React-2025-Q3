import { render } from '@testing-library/react';
import { it, expect } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';

import CharacterList from './character-list';

it('Should render character list', () => {
  const { container } = render(<CharacterList character={characterMock[0]} />);
  expect(container).toBeInTheDocument();
});
