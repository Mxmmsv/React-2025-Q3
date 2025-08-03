import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { Character } from '@/api/types';

type State = {
  characters: Character[];
};

const initialState: State = {
  characters: [],
};

const selectedCharactersSlice = createSlice({
  name: 'selectedCharacters',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<Character>) => {
      const characters = state.characters.some((c) => c.id === action.payload.id);
      if (!characters) {
        state.characters.push(action.payload);
      }
    },
    decrement: (state, action: PayloadAction<Character>) => {
      state.characters = state.characters.filter((c) => c.id !== action.payload.id);
    },
  },
});

export const { increment, decrement } = selectedCharactersSlice.actions;
export default selectedCharactersSlice.reducer;
