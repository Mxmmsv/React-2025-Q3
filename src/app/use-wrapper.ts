import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import apiRoot from '@/api/api';
import type { Character } from '@/api/types';
import localStorageService from '@/services/local-storage';

function useWrapper() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const localName = localStorageService().getCharacter() || '';
  const urlName = searchParams.get('name');
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    if (!urlName && localName) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('name', localName);
      newParams.set('page', '1');
      navigate({ pathname: '/characters', search: newParams.toString() }, { replace: true });
    }
  }, [urlName, localName, navigate, searchParams]);

  const name = urlName ?? localName;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const characters = name
          ? await apiRoot().search(name, page)
          : await apiRoot().characters(page);

        setCharacters(characters.results);
        setTotalPages(characters.info.pages);
      } catch (error) {
        if (error instanceof Error) {
          setCharacters([]);
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (name) {
      void fetchData();
    }
  }, [name, page]);

  return {
    characters,
    isLoading,
    error,
    totalPages,
    name,
    page,
  };
}

export default useWrapper;
