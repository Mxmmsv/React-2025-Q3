import { useSelector } from 'react-redux';

import type { RootState } from '@/services/store/store';

function SelectedCharactersPanel() {
  const selectedCharacters = useSelector((state: RootState) => state.selectedCharacters.characters);

  return (
    <div className="bg-background/70 sticky bottom-0 flex flex-col gap-2 rounded-xl p-2 shadow-md">
      <h2 className="text-center text-2xl">Selected: {selectedCharacters.length}</h2>
      <ul className="flex flex-wrap items-center justify-center">
        {selectedCharacters.map((character) => (
          <li key={character.id} className="w-32 truncate" title={character.name}>
            <div className="flex flex-col items-center gap-2">
              <p>{character.name}</p>
              <img
                src={character.image}
                alt={character.name}
                className="h-16 w-16 rounded-xl object-cover"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedCharactersPanel;
