import { Component } from 'react';

import SearchBar from '@/features/search/search-bar';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="">
          <img
            src="./Rick_and_Morty.svg"
            alt="Rick and Morty logo"
            loading="lazy"
            decoding="async"
            className="h-full w-full [filter:drop-shadow(0_0_0_var(--color-chart-3))] transition duration-300 hover:[filter:drop-shadow(0_0_1rem_var(--color-chart-3))]"
          />
        </div>
        <SearchBar />
      </header>
    );
  }
}
