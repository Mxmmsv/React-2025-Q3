import type { Character } from '@/api/types';

type SearchProps = {
  onSearch: (characters: Character[], isLoading: boolean) => void;
};

type SearchState = {
  inputValue: string;
  error: Error | null;
};

export type { SearchProps, SearchState };
