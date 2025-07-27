import Header from '@/features/header/header';
import Main from '@/features/main/main';

import useWrapper from './use-wrapper';

function Wrapper() {
  const { characters, isLoading, error, totalPages } = useWrapper();

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
