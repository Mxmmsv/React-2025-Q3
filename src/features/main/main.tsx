import { Component } from 'react';

import ErrorButton from '@/features/error/error-button';

import CharacterList from './character-list';
import type { MainProps } from './types';

class Main extends Component<MainProps> {
  render() {
    const { characters, isLoading } = this.props;

    if (isLoading) {
      return (
        <main className="flex flex-col gap-5">
          <ErrorButton />
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
        <ErrorButton />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {characters.map((character) => (
            <CharacterList key={character.id} character={character} />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
