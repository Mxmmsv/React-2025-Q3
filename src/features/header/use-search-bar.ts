import { useState, type ChangeEvent, type FormEvent } from 'react';

import useSearchQuery from '@/services/use-search-query';

function useSearchBar() {
  const { setInputValue, submitQuery, inputValue } = useSearchQuery();
  const [error, setError] = useState<Error | null>(null);

  const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      submitQuery(inputValue);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      }
    }
  };

  return {
    handleSubmit,
    handleInputValueChange,
    inputValue,
    error,
  };
}

export default useSearchBar;
