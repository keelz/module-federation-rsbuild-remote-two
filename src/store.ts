import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from './features/reducer';
import remoteOneSlice from './features/remoteOne.slice';

const store = configureStore({
  reducer: combineReducers({
    remote_one: remoteOneSlice.reducer, // inject remote_one mock reducer
    remote_two: reducer,
  }),
});

export { store };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
