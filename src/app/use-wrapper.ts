import { useState } from 'react';

import type { Character } from '@/api/types';

function useWrapper() {
  const [characters, setCharacters] = useState<Character[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const handleSearch = (characters: Character[], isLoading: boolean) => {
    setCharacters(characters);
    setIsLoading(isLoading);
  };

  return {
    handleSearch,
    setCharacters,
    setIsLoading,
    setError,
    characters,
    isLoading,
    error,
  };
}

export default useWrapper;
