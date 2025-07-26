import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { it, expect } from 'vitest';

import App from './App';

it('Should render app', () => {
  const { container } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(container).toBeInTheDocument();
});
