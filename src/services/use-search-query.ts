import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router';

import localStorageService from './local-storage';

export default function useSearchQuery() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const initialValue = searchParams.get('name') ?? localStorageService().getCharacter() ?? '';
  const [inputValue, setInputValue] = useState(initialValue);

  const submitQuery = (query: string) => {
    const trimmed = query.trim();
    localStorageService().setCharacter(trimmed);

    const newParams = new URLSearchParams();
    if (trimmed) newParams.set('name', trimmed);
    newParams.set('page', '1');

    navigate({ pathname: '/characters', search: newParams.toString() });
  };

  return {
    inputValue,
    setInputValue,
    submitQuery,
  };
}
