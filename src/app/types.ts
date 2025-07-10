import type { Character } from '@/api/types';

type AppState = {
  errorBoundaryKey: number;
  characters: Character[];
  isLoading: boolean;
  error: Error | null;
};

export type { AppState };
