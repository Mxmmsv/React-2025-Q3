import { useSelector } from 'react-redux';

import Header from '@/features/header/header';
import Main from '@/features/main/main';
import SelectedCharactersPanel from '@/features/main/selected-character-panel';
import type { RootState } from '@/services/store/store';

import useWrapper from './use-wrapper';

function Wrapper() {
  const selectedCharacters = useSelector((state: RootState) => state.selectedCharacters.characters);
  const { characters, isLoading, error, totalPages } = useWrapper();

  if (error) {
    throw error;
  }

  return (
    <>
      <Header />
      <Main characters={characters} isLoading={isLoading} totalPages={totalPages} />
      {selectedCharacters.length > 0 && <SelectedCharactersPanel />}
    </>
  );
}

export default Wrapper;
