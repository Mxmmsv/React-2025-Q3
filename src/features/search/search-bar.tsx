import { Component } from 'react';

import Button from '@/components/button';
import Input from '@/components/input';

class SearchBar extends Component {
  render() {
    return (
      <div className="flex flex-row gap-10">
        <Input placeholder="please write smth" id="" name=""></Input>
        <Button>Submit</Button>
      </div>
    );
  }
}

export default SearchBar;
