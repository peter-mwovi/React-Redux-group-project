import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isReserved: false,
  error: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducer;
