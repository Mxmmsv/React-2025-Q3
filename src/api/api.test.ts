import { vi, describe, it, expect, beforeEach, afterEach, type Mock } from 'vitest';

import characterMock from './__mocks__/characters.mock';
import apiRoot from './api';

const BASE_URL = 'https://rickandmortyapi.com/api';

describe('apiRoot', () => {
  beforeEach(() => {
    vi.stubGlobal('fetch', vi.fn());
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('Should fetch and return characters', async () => {
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [characterMock] }),
    });

    const data = await apiRoot().characters();

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/character?page=1`);
    expect(data).toEqual({ results: [characterMock] });
  });

  it('Should search characters by name', async () => {
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [characterMock[0]] }),
    });

    const query = 'Rick';
    const data = await apiRoot().search(query);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/character/?name=${query}&page=1`);
    expect(data).toEqual({ results: [characterMock[0]] });
  });

  it('Should throw error when the request is not ok', async () => {
    (fetch as Mock).mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(apiRoot().error()).rejects.toThrow('404');
  });
});
