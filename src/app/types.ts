import type { Character } from '@/api/types';

type WrapperState = {
  characters: Character[];
  isLoading: boolean;
  error: Error | null;
};

export type { WrapperState };
