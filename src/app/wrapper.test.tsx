import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import Wrapper from './wrapper';

it('Should render wrapper', () => {
  const { container } = render(
    <MemoryRouter>
      <Wrapper />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
