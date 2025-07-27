import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';

import CharacterList from './character-list';

it('Should render character list', () => {
  const { container } = render(
    <MemoryRouter>
      <CharacterList character={characterMock[0]} />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
