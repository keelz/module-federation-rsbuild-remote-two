import { configureStore } from '@reduxjs/toolkit';
import remote_two from './features/reducer';

export const store = configureStore({
  reducer: { remote_two },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
