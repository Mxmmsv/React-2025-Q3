import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { increment, decrement } from '@/services/store/slice/selectedCharactersSlice';
import type { RootState } from '@/services/store/store';
import { cn } from '@/utils/cn';

import type { CharacterListProps } from './types';
import useCharacterList from './use-character-list';

function CharacterList({ character }: CharacterListProps) {
  const { id: selectedId } = useParams();
  const dispatch = useDispatch();
  const { handleClick } = useCharacterList();

  const isSelected = useSelector((state: RootState) =>
    state.selectedCharacters.characters.some((c) => c.id === character.id)
  );

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.target.checked) {
      dispatch(increment(character));
    } else {
      dispatch(decrement(character));
    }
  };

  const { id, image, name, status, species, gender, type, origin } = character;

  return (
    <div
      className={cn(
        'bg-background relative cursor-pointer rounded-xl p-2 shadow-md transition hover:scale-[1.02]',
        selectedId === String(id) && 'ring-primary ring-2'
      )}
      onClick={() => handleClick(id)}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 h-5 w-5 cursor-pointer accent-green-500"
        aria-label={`Select ${name}`}
      />

      <img
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-md"
      />
      <h2 className="text-muted-hero mt-2 text-center text-xl font-semibold">{name}</h2>
      <div className="flex flex-row items-center justify-between">
        <p>Status:</p>
        <p
          className={cn(
            status === 'Alive' && 'text-chart-2',
            status === 'Dead' && 'text-destructive',
            status === 'unknown' && 'text-bg-muted'
          )}
        >
          {status}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p>Origin:</p>
        <p className="text-gray-600">{origin.name}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p>Species:</p>
        <p className="text-gray-600">{species}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p>Gender:</p>
        <p className="text-gray-600">{gender}</p>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <p>Type:</p>
        <p className="truncate text-gray-600" title={type || 'common'}>
          {type || 'common'}
        </p>
      </div>
    </div>
  );
}

export default CharacterList;
