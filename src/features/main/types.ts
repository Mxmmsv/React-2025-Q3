import type { Character } from '@/api/types';

type MainProps = {
  characters: Character[];
  isLoading: boolean;
  totalPages: number;
};

type CharacterListProps = {
  character: Character;
};

type PaginationProps = {
  totalPages: number;
};

export type { MainProps, CharacterListProps, PaginationProps };
