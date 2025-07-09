import { Component } from 'react';

import SearchBar from './search-bar';
import type { SearchProps } from './types';

export default class Header extends Component<SearchProps> {
  render() {
    return (
      <header className="flex flex-row items-center justify-between gap-5">
        <div>
          <img
            src="./Rick_and_Morty.svg"
            alt="Rick and Morty logo"
            loading="lazy"
            decoding="async"
            className="h-16 w-full [filter:drop-shadow(0_0_0_var(--color-muted-hero))] transition duration-300 hover:[filter:drop-shadow(0_0_1rem_var(--color-muted-hero))]"
          />
        </div>
        <SearchBar onSearch={this.props.onSearch} />
      </header>
    );
  }
}
