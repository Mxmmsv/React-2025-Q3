import Button from '@/components/button';
import Input from '@/components/input';

import type { SearchBarProps } from './types';
import useSearchBar from './use-search-bar';

function SearchBar({ onSearch }: SearchBarProps) {
  const { handleSubmit, handleInputValueChange, inputValue, error } = useSearchBar({ onSearch });

  if (error) {
    throw error;
  }

  return (
    <form onSubmit={(e) => void handleSubmit(e)} className="w-full">
      <div className="flex w-full flex-row gap-10">
        <Input
          placeholder="please write smth"
          value={inputValue}
          onChange={handleInputValueChange}
          className="bg-background"
        />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default SearchBar;
