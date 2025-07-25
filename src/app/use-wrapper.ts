import { useState } from 'react';
import { useSearchParams } from 'react-router';

import type { Character } from '@/api/types';
import localStorageService from '@/services/local-storage';

function useWrapper() {
  const [characters, setCharacters] = useState<Character[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams] = useSearchParams();
  const query = localStorageService().getCharacter() || '';
  const name = searchParams.get('name') || '';
  const page = Number(searchParams.get('page')) || 1;

  const handleSearch = (characters: Character[], isLoading: boolean) => {
    setCharacters(characters);
    setIsLoading(isLoading);
  };

  return {
    handleSearch,
    setCharacters,
    setIsLoading,
    setError,
    setTotalPages,
    characters,
    isLoading,
    error,
    totalPages,
    query,
    name,
    page,
  };
}

export default useWrapper;
