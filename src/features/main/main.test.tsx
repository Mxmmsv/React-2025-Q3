import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { it, expect, describe } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';
import { store } from '@/services/store/store';

import Main from './main';

describe('Main', () => {
  it('Should render main', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Main characters={characterMock} isLoading={false} totalPages={1} />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toBeInTheDocument();
  });

  it('Should render isLoading', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main characters={[]} isLoading={true} totalPages={1} />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/PLEASE WAIT/i)).toBeInTheDocument();
  });
});
