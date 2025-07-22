import { useState } from 'react';

import apiRoot from '@/api/api';
import Button from '@/components/button';

function ErrorButton() {
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

  if (hasError && error) {
    throw error;
  }

  return <Button onClick={handleClick}>ERROR BUTTON</Button>;
}

export default ErrorButton;
