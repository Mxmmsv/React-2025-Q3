import { Component } from 'react';

import type { Character } from '@/api/types';
import { cn } from '@/utils/cn';

class CharacterList extends Component<Character> {
  render() {
    const { image, name, status, species, gender, type } = this.props;
    return (
      <div className="bg-background rounded-xl p-2 shadow-md">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          className="h-auto w-full rounded-md"
        />
        <h2 className="text-muted-hero mt-2 text-center text-xl font-semibold">{name}</h2>
        <div className="flex flex-row items-center justify-between">
          <p>Status:</p>
          <p
            className={cn(
              status === 'Alive' && 'text-chart-2',
              status === 'Dead' && 'text-destructive',
              status === 'unknown' && 'text-bg-muted'
            )}
          >
            {status}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Species:</p>
          <p className="text-gray-600">{species}</p>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Gender:</p>
          <p className="text-gray-600">{gender}</p>
        </div>
        <div className="flex flex-row items-center justify-between gap-5">
          <p>Type:</p>
          <p className="truncate text-gray-600" title={type || 'common'}>
            {type || 'common'}
          </p>
        </div>
      </div>
    );
  }
}

export default CharacterList;
