import { render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import App from './App';

describe('app', () => {
  it('Should render app', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
