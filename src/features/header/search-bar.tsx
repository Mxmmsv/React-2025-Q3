import { Component, type ChangeEvent, type FormEvent } from 'react';

import apiRoot from '@/api/api';
import Button from '@/components/button';
import Input from '@/components/input';

import type { SearchProps, SearchState } from './types';

class SearchBar extends Component<SearchProps, SearchState> {
  state = {
    inputValue: localStorage.getItem('INPUT-VALUE') || '',
    hasError: false,
    error: null,
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const query = this.state.inputValue.trim();
    localStorage.setItem('INPUT-VALUE', query);
    try {
      const characters = await apiRoot().search(query);
      this.props.onSearch(characters);
    } catch (error) {
      if (error instanceof Error) {
        this.setState({ hasError: true, error: error });
      }
    }
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError && error) {
      throw error;
    }
    return (
      <form onSubmit={(e) => void this.handleSubmit(e)} className="w-full">
        <div className="flex w-full flex-row gap-10">
          <Input
            placeholder="please write smth"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            className="bg-background"
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
