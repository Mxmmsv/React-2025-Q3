import { useEffect } from 'react';

import apiRoot from '@/api/api';
import Header from '@/features/header/header';
import Main from '@/features/main/main';

import useWrapper from './use-wrapper';

function Wrapper() {
  const { characters, isLoading, error, handleSearch, setCharacters, setIsLoading, setError } =
    useWrapper();

  useEffect(() => {
    const fetchData = async () => {
      const query = localStorage.getItem('INPUT-VALUE');
      try {
        const characters = query ? await apiRoot().search(query) : await apiRoot().characters();
        setCharacters(characters);
        setIsLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setCharacters([]);
          setIsLoading(false);
          setError(error);
        }
      }
    };

    void fetchData();
  }, [setCharacters, setIsLoading, setError]);

  if (error) {
    throw error;
  }

  return (
    <>
      <Header onSearch={handleSearch} />
      <Main characters={characters} isLoading={isLoading} />
    </>
  );
}

export default Wrapper;
