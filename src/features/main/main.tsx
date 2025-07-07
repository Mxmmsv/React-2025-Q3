import { Component } from 'react';

import apiRoot from '@/api/api';

import CharacterList from './character-list';
import type { MainState } from './types';

class Main extends Component {
  state: MainState = {
    characters: [],
    isLoading: true,
  };

  async componentDidMount() {
    const characters = await apiRoot().characters();
    this.setState({ characters, isLoading: false });
  }

  componentDidUpdate() {}

  render() {
    const { characters, isLoading } = this.state;

    if (isLoading) {
      return <main>Loading...</main>;
    }

    return (
      <main className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {characters.map((character) => (
          <CharacterList key={character.id} {...character} />
        ))}
      </main>
    );
  }
}

export default Main;
