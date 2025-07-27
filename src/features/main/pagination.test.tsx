import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { vi, describe, it, beforeEach, expect } from 'vitest';

import Pagination from './pagination';

const mockNavigate = vi.fn();
const mockSearchParams = new URLSearchParams('page=2');

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useSearchParams: () => [mockSearchParams],
  };
});

describe('Pagination', () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  it('Should call navigate with correct search when clicking page button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Pagination totalPages={5} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: '3' }));

    expect(mockNavigate).toHaveBeenCalledWith({ search: 'page=3' });
  });

  it('Should call navigate with correct search when clicking →', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <Pagination totalPages={5} />
      </MemoryRouter>
    );

    await user.click(screen.getByRole('button', { name: '→' }));

    expect(mockNavigate).toHaveBeenCalledWith({ search: 'page=3' });
  });
});
