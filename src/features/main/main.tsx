import { Component } from 'react';

import apiRoot from '@/api/api';

import CharacterList from './character-list';
import type { MainState } from './types';

class Main extends Component {
  state: MainState = {
    characters: [],
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const characters = await apiRoot().characters();
      this.setState({ characters, isLoading: false });
    } catch (error) {
      this.setState({
        error: `${error instanceof Error ? error.message : 'smth went wrong >*_*<'}`,
        isLoading: false,
      });
    }
  }

  render() {
    const { characters, isLoading, error } = this.state;

    if (isLoading) {
      return <main>Loading...</main>;
    }

    if (error) {
      return <main>Error: {error}</main>;
    }

    return (
      <main className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
        {characters.map((character) => (
          <CharacterList key={character.id} {...character} />
        ))}
      </main>
    );
  }
}

export default Main;
