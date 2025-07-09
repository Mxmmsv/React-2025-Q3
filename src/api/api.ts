import type { Character, CharacterList, ResponseError } from './types';

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

async function responseChecker(response: Response) {
  if (!response.ok) {
    let message = `Error ${response.status}: ${response.statusText}`;
    const data = (await response.json()) as ResponseError;

    if (data?.error) {
      message += ` – ${data.error}`;
    }

    throw new Error(message);
  }
}

export default apiRoot;
