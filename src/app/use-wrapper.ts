import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import apiRoot from '@/api/api';
import type { Character } from '@/api/types';
import localStorageService from '@/services/local-storage';

function useWrapper() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlName = searchParams.get('name');
  const localName = localStorageService().getCharacter();
  const name = urlName ?? '';
  const page = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    if (!urlName && localName && localName.trim()) {
      const newParams = new URLSearchParams();
      newParams.set('name', localName);
      newParams.set('page', '1');
      navigate({ pathname: '/characters', search: newParams.toString() }, { replace: true });
    }
  }, [urlName, localName, navigate]);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const data = name.trim()
          ? await apiRoot().search(name, page)
          : await apiRoot().characters(page);

        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
          setCharacters([]);
        }
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
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
