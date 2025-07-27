import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import About from './about';

it('Should render about', () => {
  const { container } = render(
    <MemoryRouter>
      <About />
    </MemoryRouter>
  );

  expect(container).toBeInTheDocument();
});
