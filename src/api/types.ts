type Character = {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

type Origin = {
  name: string;
  url: string;
};

type Location = {
  name: string;
  url: string;
};

type PaginationInfo = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

type CharacterList = {
  info: PaginationInfo;
  results: Character[];
};

export type { Character, Origin, Location, PaginationInfo, CharacterList };
