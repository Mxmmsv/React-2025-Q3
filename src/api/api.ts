import type { Character, CharacterList } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

function apiRoot() {
  return {
    characters: async (page = 1): Promise<CharacterList> => {
      const response = await fetch(`${BASE_URL}/character?page=${page}`);
      responseChecker(response);
      const data = (await response.json()) as CharacterList;
      return data;
    },

    search: async (query: string, page = 1): Promise<CharacterList> => {
      const response = await fetch(`${BASE_URL}/character/?name=${query}&page=${page}`);
      responseChecker(response);
      const data = (await response.json()) as CharacterList;
      return data;
    },

    character: async (id: number): Promise<Character> => {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      responseChecker(response);
      return response.json();
    },

    error: async () => {
      const response = await fetch(`${BASE_URL}/character/1111111111`);
      responseChecker(response);
    },
  };
}

function responseChecker(response: Response) {
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
}

export default apiRoot;
