import type { Character, CharacterList } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

function apiRoot() {
  return {
    characters: async (): Promise<Character[]> => {
      const response = await fetch(`${BASE_URL}/character`);
      const data = (await response.json()) as CharacterList;
      return data.results;
    },
    search: async (query: string): Promise<Character[]> => {
      const response = await fetch(`${BASE_URL}/character/?=name${query}`);
      const data = (await response.json()) as CharacterList;
      return data.results;
    },
  };
}

export default apiRoot;
