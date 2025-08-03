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
        'bg-card relative cursor-pointer rounded-xl p-2 shadow-md transition hover:scale-[1.02]',
        selectedId === String(id) && 'ring-primary ring-2'
      )}
      onClick={() => handleClick(id)}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        onClick={(e) => e.stopPropagation()}
        className="bg-hero absolute top-2 right-2 h-15 w-15 cursor-pointer"
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
        <p className="text-foreground">Status:</p>
        <p
          className={cn(
            status === 'Alive' && 'text-chart-2',
            status === 'Dead' && 'text-destructive',
            status === 'unknown' && 'text-muted-foreground'
          )}
        >
          {status}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-foreground">Origin:</p>
        <p className="text-muted-foreground">{origin.name}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-foreground">Species:</p>
        <p className="text-muted-foreground">{species}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p className="text-foreground">Gender:</p>
        <p className="text-muted-foreground">{gender}</p>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <p className="text-foreground">Type:</p>
        <p className="text-muted-foreground truncate" title={type || 'common'}>
          {type || 'common'}
        </p>
      </div>
    </div>
  );
}

export default CharacterList;
