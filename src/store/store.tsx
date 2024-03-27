import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import assets from './slices/assets';


export const store = configureStore({
  reducer: combineReducers({
    assets,
  }),
  middleware: [
    thunk,
  ],
});

export type RootState = ReturnType<typeof store.getState>;

