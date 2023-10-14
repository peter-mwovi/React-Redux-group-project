import { createSlice } from '@reduxjs/toolkit';

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    data: [],
  },
  reducers: {
    setRockets: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRockets } = rocketsSlice.actions;
export default rocketsSlice.reducer;
