import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';

import CharacterDetail from './character-detail';

const mockCharacterApi = vi.fn();

vi.mock('@/api/api', () => ({
  default: () => ({
    character: mockCharacterApi,
  }),
}));

describe('CharacterDetail', () => {
  beforeEach(() => {
    mockCharacterApi.mockReset();
  });

  it('Should show loading state and render character details', async () => {
    mockCharacterApi.mockResolvedValueOnce(characterMock[0]);

    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <Routes>
          <Route path="/characters/:id" element={<CharacterDetail />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/loading character/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    expect(screen.getByText('Status:')).toBeInTheDocument();
    expect(screen.getByText('Alive')).toBeInTheDocument();
    expect(screen.getByText('Origin:')).toBeInTheDocument();
    expect(screen.getByText('Earth (C-137)')).toBeInTheDocument();
    expect(screen.getByText('Species:')).toBeInTheDocument();
    expect(screen.getByText('Human')).toBeInTheDocument();
    expect(screen.getByText('Gender:')).toBeInTheDocument();
    expect(screen.getByText('Male')).toBeInTheDocument();
    expect(screen.getByText('Type:')).toBeInTheDocument();
    expect(screen.getByText('common')).toBeInTheDocument();
  });

  it('Should navigate back when clicking Close button', async () => {
    mockCharacterApi.mockResolvedValueOnce(characterMock[0]);

    const user = userEvent.setup();

    const TestWrapper = () => (
      <Routes>
        <Route path="/characters" element={<div>Character list</div>} />
        <Route path="/characters/:id" element={<CharacterDetail />} />
      </Routes>
    );

    render(
      <MemoryRouter initialEntries={['/characters/1']}>
        <TestWrapper />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    await user.click(screen.getByRole('button', { name: /close/i }));

    expect(screen.getByText('Character list')).toBeInTheDocument();
  });
});
