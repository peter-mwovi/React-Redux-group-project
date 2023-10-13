import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  hasJoined: false,
  error: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
});

export default missionsSlice.reducer;
