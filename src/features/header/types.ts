import type { Character } from '@/api/types';

type SearchProps = {
  onSearch: (characters: Character[]) => void;
};

type SearchState = {
  inputValue: string;
  hasError: boolean;
  error: Error | null;
};

export type { SearchProps, SearchState };
