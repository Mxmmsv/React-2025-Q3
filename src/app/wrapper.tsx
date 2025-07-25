import { useEffect } from 'react';

import apiRoot from '@/api/api';
import Header from '@/features/header/header';
import Main from '@/features/main/main';

import useWrapper from './use-wrapper';

function Wrapper() {
  const {
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
  } = useWrapper();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const characters = query
          ? await apiRoot().search(name, page)
          : await apiRoot().characters(page);

        setCharacters(characters.results);
        setTotalPages(characters.info.pages);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setCharacters([]);
          setError(error);
        }
      }
    };

    void fetchData();
  }, [page, name, setCharacters, setError, setIsLoading, setTotalPages, query]);

  if (error) {
    throw error;
  }

  return (
    <>
      <Header />
      <Main characters={characters} isLoading={isLoading} totalPages={totalPages} />
    </>
  );
}

export default Wrapper;
