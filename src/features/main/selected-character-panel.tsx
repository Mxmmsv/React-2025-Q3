import { useDispatch, useSelector } from 'react-redux';

import { reset } from '@/services/store/slice/selectedCharactersSlice';
import type { RootState } from '@/services/store/store';
import downloadAsCSV from '@/utils/downloadAsCSV';

function SelectedCharactersPanel() {
  const dispatch = useDispatch();
  const selectedCharacters = useSelector((state: RootState) => state.selectedCharacters.characters);

  const handleReset = () => {
    dispatch(reset());
  };

  const handleDownload = () => {
    downloadAsCSV(selectedCharacters);
  };

  return (
    <div className="bg-background/70 sticky bottom-2 flex flex-col gap-2 rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-foreground text-2xl">Selected: {selectedCharacters.length}</h2>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="bg-destructive hover:bg-chart-1 cursor-pointer rounded-md px-3 py-1 text-sm transition"
          >
            Unselect All
          </button>
          <button
            onClick={handleDownload}
            className="bg-hero hover:bg-muted-hero cursor-pointer rounded-md px-3 py-1 text-sm transition"
          >
            Download CSV
          </button>
        </div>
      </div>

      <div className="custom-scrollbar mt-2 overflow-x-auto">
        <ul className="flex min-w-fit gap-4">
          {selectedCharacters.map((character) => (
            <li key={character.id} className="w-24 truncate text-center" title={character.name}>
              <div className="flex flex-col items-center gap-2">
                <p className="text-foreground text-sm">{character.name}</p>
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
    </div>
  );
}

export default SelectedCharactersPanel;
