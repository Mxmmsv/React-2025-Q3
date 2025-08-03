import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import { store } from '@/services/store/store';

import Wrapper from './wrapper';

it('Should render wrapper', () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter>
        <Wrapper />
      </MemoryRouter>
    </Provider>
  );
  expect(container).toBeInTheDocument();
});
