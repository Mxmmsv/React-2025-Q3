import { useParams } from 'react-router';

import CharacterDetail from './character-detail';
import CharacterList from './character-list';
import Pagination from './pagination';
import type { MainProps } from './types';

function Main({ characters, isLoading, totalPages }: MainProps) {
  const { id } = useParams();

  if (isLoading) {
    return (
      <main className="flex flex-col gap-5">
        <div className="flex flex-col items-center">
          <img
            src="./20-min-adventure.gif"
            alt="loading gif with rick and morty"
            className="rounded-2xl"
          />
          <span className="text-center text-3xl text-white">PLEASE WAIT</span>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="grid flex-1 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {characters.map((character) => (
            <CharacterList key={character.id} character={character} />
          ))}
        </div>
        {id && <CharacterDetail />}
      </div>
      <Pagination totalPages={totalPages} />
    </main>
  );
}

export default Main;
