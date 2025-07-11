import type { Character } from '@/api/types';

type AppState = {
  errorBoundaryKey: number;
};

type WrapperState = {
  characters: Character[];
  isLoading: boolean;
  error: Error | null;
};

export type { AppState, WrapperState };
