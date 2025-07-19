import type { Character } from '@/api/types';

type MainProps = {
  characters: Character[];
  isLoading: boolean;
};

type CharacterListProps = {
  character: Character;
};

export type { MainProps, CharacterListProps };
