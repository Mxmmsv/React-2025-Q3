import type { Character } from '@/api/types';

type MainState = {
  characters: Character[];
  isLoading: boolean;
  error: string | null;
};

export type { MainState };
