import type { Character, CharacterList } from './types';

const BASE_URL = 'https://rickandmortyapi.com/api';

function apiRoot() {
  return {
    characters: async (): Promise<Character[]> => {
      const response = await fetch(`${BASE_URL}/character`);
      responseChecker(response);
      const data = (await response.json()) as CharacterList;
      return data.results;
    },
    search: async (query: string): Promise<Character[]> => {
      const response = await fetch(`${BASE_URL}/character/?name=${query}`);
      responseChecker(response);
      const data = (await response.json()) as CharacterList;
      return data.results;
    },
    error: async () => {
      const response = await fetch(`${BASE_URL}/character/1111111111`);
      responseChecker(response);
    },
  };
}

function responseChecker(response: Response) {
  if (!response.ok) {
    const message = `Error ${response.status}: status text${response.statusText}`;
    throw new Error(message);
  }
}

export default apiRoot;
