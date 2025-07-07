import type { Character } from '@/api/types';

type MainState = {
  characters: Character[];
  isLoading: boolean;
};

export type { MainState };
