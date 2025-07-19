import { useState, type ChangeEvent, type FormEvent } from 'react';

import apiRoot from '@/api/api';

import type { SearchBarProps } from './types';

function useSearchBar({ onSearch }: SearchBarProps) {
  const [inputValue, setInputValue] = useState(localStorage.getItem('INPUT-VALUE') || '');
  const [error, setError] = useState<Error | null>(null);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const query = inputValue.trim();
    localStorage.setItem('INPUT-VALUE', query);
    onSearch([], true);
    try {
      const characters = await apiRoot().search(query);
      onSearch(characters, false);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
  };

  return { setInputValue, setError, handleInputValueChange, handleSubmit, inputValue, error };
}

export default useSearchBar;
