import { configureStore } from '@reduxjs/toolkit';

import selectedCharactersReducer from '@/services/store/slice/selectedCharactersSlice';

export const store = configureStore({
  reducer: {
    selectedCharacters: selectedCharactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
