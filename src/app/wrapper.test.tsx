import { render } from '@testing-library/react';
import { it, expect, describe } from 'vitest';

import Wrapper from './wrapper';

describe('wrapper', () => {
  it('Should render app', () => {
    const { container } = render(<Wrapper />);
    expect(container).toBeInTheDocument();
  });
});
