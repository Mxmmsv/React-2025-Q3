import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import NotFoundPage from './not-found-page';

it('Should render not found page', () => {
  const { container } = render(
    <MemoryRouter>
      <NotFoundPage />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
