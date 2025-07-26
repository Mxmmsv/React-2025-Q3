import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { it, expect, describe } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';

import Main from './main';

describe('Main', () => {
  it('Should render main', () => {
    const { container } = render(
      <MemoryRouter>
        <Main characters={characterMock} isLoading={false} totalPages={1} />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });

  it('Should render isLoading', () => {
    render(<Main characters={[]} isLoading={true} totalPages={1} />);
    expect(screen.getByText(/PLEASE WAIT/i)).toBeInTheDocument();
  });
});
