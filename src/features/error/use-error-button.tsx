import { useState } from 'react';

import apiRoot from '@/api/api';

function useErrorButton() {
  const [error, setError] = useState<Error | null>(null);
  const [hasError, setHasError] = useState(false);

  const handleClick = async () => {
    try {
      await apiRoot().error();
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
        setHasError(true);
      }
    }
  };

  return {
    setError,
    setHasError,
    handleClick,
    error,
    hasError,
  };
}

export default useErrorButton;
