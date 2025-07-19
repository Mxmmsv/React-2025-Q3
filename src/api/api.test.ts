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

    const characters = await apiRoot().characters();

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/character`);
    expect(characters).toEqual([characterMock]);
  });

  it('Should search characters by name', async () => {
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ results: [characterMock[0]] }),
    });

    const searchQuery = 'Rick';
    const results = await apiRoot().search(searchQuery);

    expect(fetch).toHaveBeenCalledWith(`${BASE_URL}/character/?name=${searchQuery}`);
    expect(results).toEqual([characterMock[0]]);
  });

  it('Should throw error when the request is not ok', async () => {
    (fetch as Mock).mockResolvedValueOnce({ ok: false, status: 404 });

    await expect(apiRoot().error()).rejects.toThrow('404');
  });
});
