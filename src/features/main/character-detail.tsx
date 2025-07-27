import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import apiRoot from '@/api/api';
import type { Character } from '@/api/types';
import Button from '@/components/button';
import { cn } from '@/utils/cn';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    apiRoot()
      .character(Number(id))
      .then(setCharacter)
      .finally(() => setIsLoading(false));
  }, [id]);

  const handleClick = () => {
    navigate('/characters');
  };

  if (!character) {
    return;
  }

  if (isLoading) {
    return <aside className="p-4 text-white">Loading character...</aside>;
  }

  return (
    <aside className="bg-background w-1/3 rounded-md p-2">
      <img
        src={character.image}
        alt={character.name}
        loading="lazy"
        decoding="async"
        className="h-auto w-full rounded-md"
      />
      <h2 className="text-muted-hero mt-2 text-center text-xl font-semibold">{character.name}</h2>
      <div className="flex flex-row items-center justify-between">
        <p>Status:</p>
        <p
          className={cn(
            character.status === 'Alive' && 'text-chart-2',
            character.status === 'Dead' && 'text-destructive',
            character.status === 'unknown' && 'text-bg-muted'
          )}
        >
          {character.status}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p>Origin:</p>
        <p className="text-gray-600">{character.origin.name}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p>Species:</p>
        <p className="text-gray-600">{character.species}</p>
      </div>
      <div className="flex flex-row items-center justify-between">
        <p>Gender:</p>
        <p className="text-gray-600">{character.gender}</p>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <p>Type:</p>
        <p className="truncate text-gray-600" title={character.type || 'common'}>
          {character.type || 'common'}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between gap-5">
        <p>Created:</p>
        <p className="truncate text-gray-600" title={character.created}>
          {character.created}
        </p>
      </div>
      <Button onClick={handleClick} className="w-full">
        Close
      </Button>
    </aside>
  );
}

export default CharacterDetail;
