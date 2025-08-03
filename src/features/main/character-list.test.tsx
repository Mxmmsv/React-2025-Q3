import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';
import { store } from '@/services/store/store';

import CharacterList from './character-list';

it('Should render character list', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <CharacterList character={characterMock[0]} />
      </MemoryRouter>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
