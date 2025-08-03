import { useSelector } from 'react-redux';

import type { RootState } from '@/services/store/store';
import { cn } from '@/utils/cn';

function SelectedCharactersPanel() {
  const selectedCharacters = useSelector((state: RootState) => state.selectedCharacters.characters);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-2xl text-white">Selected: {selectedCharacters.length}</h2>

      <ul
        className={cn(
          'grid grid-cols-1 flex-col gap-5',
          selectedCharacters.length >= 10 && 'grid-cols-2'
        )}
      >
        {selectedCharacters.map((character) => (
          <li key={character.id}>
            <div className="bg-background flex w-full flex-col items-center gap-2 rounded-xl p-2 shadow-md">
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} className="w-30 rounded-xl" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedCharactersPanel;
