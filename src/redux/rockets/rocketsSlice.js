import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  rockets: [],
  error: null,
  loading: false,
  bookedRockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRockets.fulfilled, (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    });
    builder.addCase(getRockets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default rocketsSlice.reducer;
