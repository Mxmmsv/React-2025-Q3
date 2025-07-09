import type { Character } from '@/api/types';

type SearchProps = {
  onSearch: (characters: Character[]) => void;
};

export type { SearchProps };
