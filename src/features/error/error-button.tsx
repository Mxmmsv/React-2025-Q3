import Button from '@/components/button';

import useErrorButton from './use-error-button';

function ErrorButton() {
  const { handleClick, error, hasError } = useErrorButton();

  if (hasError && error) {
    throw error;
  }

  return <Button onClick={handleClick}>ERROR BUTTON</Button>;
}

export default ErrorButton;
