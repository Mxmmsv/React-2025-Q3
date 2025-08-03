import { it, expect, describe } from 'vitest';

import characterMock from '@/api/__mocks__/characters.mock';
import reducer, {
  increment,
  decrement,
  reset,
} from '@/services/store/slice/selectedCharactersSlice';

describe('Selected Character SLice', () => {
  it('Should return the initial state', () => {
    const initial = reducer(undefined, { type: 'ERROR' });
    expect(initial).toEqual({ characters: [] });
  });

  it('Should add character on increment', () => {
    const next = reducer({ characters: [] }, increment(characterMock[0]));
    expect(next.characters).toHaveLength(1);
    expect(next.characters[0]).toEqual(characterMock[0]);
  });

  it('Should not add duplicate character', () => {
    const state = { characters: [characterMock[0]] };
    const next = reducer(state, increment(characterMock[0]));
    expect(next.characters).toHaveLength(1);
  });

  it('Should remove character on decrement', () => {
    const state = { characters: [characterMock[0]] };
    const next = reducer(state, decrement(characterMock[0]));
    expect(next.characters).toHaveLength(0);
  });

  it('Should reset the state', () => {
    const next = reducer({ characters: characterMock }, reset());
    expect(next.characters).toEqual([]);
  });
});
