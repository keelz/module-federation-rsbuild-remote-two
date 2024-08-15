import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from './features/reducer';
import remoteOneReducer from 'remote_one/reducer';

const store = configureStore({
  reducer: {
    remote_one: remoteOneReducer,
    remote_two: reducer,
  },
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
