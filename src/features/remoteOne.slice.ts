// RemoteOne mock slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: { value: 99 }
};

const remoteOneSlice = createSlice({
  name: 'remote_one_counter',
  initialState,
  reducers: {},
});

export default remoteOneSlice;
