import { createSlice } from '@reduxjs/toolkit';

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    data: [],
  },
  reducers: {
    setMissions: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
