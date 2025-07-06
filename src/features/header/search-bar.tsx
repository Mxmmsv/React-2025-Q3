import { Component, type ChangeEvent, type FormEvent } from 'react';

import Button from '@/components/button';
import Input from '@/components/input';

class SearchBar extends Component {
  state = {
    inputValue: localStorage.getItem('INPUT-VALUE') || '',
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem('INPUT-VALUE', this.state.inputValue.trim());
    return console.log('input value:', this.state.inputValue);
  };
  render() {
    return (
      <form onSubmit={(e) => void this.handleSubmit(e)} className="w-full">
        <div className="flex w-full flex-row gap-10">
          <Input
            placeholder="please write smth"
            id=""
            name=""
            className="bg-background"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></Input>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
