import { Component } from 'react';

import ErrorButton from '@/features/error/error-button';

import CharacterList from './character-list';
import type { MainProps } from './types';

class Main extends Component<MainProps> {
  render() {
    const { characters } = this.props;

    return (
      <main className="flex flex-col gap-5">
        <ErrorButton />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {characters.map((character) => (
            <CharacterList key={character.id} {...character} />
          ))}
        </div>
      </main>
    );
  }
}

export default Main;
