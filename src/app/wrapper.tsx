import { Component } from 'react';

import apiRoot from '@/api/api';
import type { Character } from '@/api/types';
import Header from '@/features/header/header';
import Main from '@/features/main/main';

import type { WrapperState } from './types';

class Wrapper extends Component<unknown, WrapperState> {
  state = {
    characters: [],
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    const query = localStorage.getItem('INPUT-VALUE');
    try {
      const characters = query ? await apiRoot().search(query) : await apiRoot().characters();
      this.setState({ characters, isLoading: false });
    } catch (error) {
      if (error instanceof Error) {
        this.setState({ characters: [], isLoading: false, error: error });
      }
    }
  }

  handleSearch = (characters: Character[], isLoading: boolean) => {
    this.setState({ characters, isLoading });
  };

  render() {
    const { error } = this.state;

    if (error) {
      throw error;
    }

    return (
      <>
        <Header onSearch={this.handleSearch} />
        <Main characters={this.state.characters} isLoading={this.state.isLoading} />
      </>
    );
  }
}

export default Wrapper;
