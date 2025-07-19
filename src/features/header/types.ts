import type { Character } from '@/api/types';

type SearchBarProps = {
  onSearch: (characters: Character[], isLoading: boolean) => void;
};

export type { SearchBarProps };
