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
  reserveRockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      state.reserveRockets.push(payload);
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
    },
    cancelRocket: (state, { payload }) => {
      state.reserveRockets = state.reserveRockets.filter((rocketId) => rocketId !== payload);
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRockets.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getRockets.fulfilled, (state, { payload }) => {
      state.loading = false;
      const result = payload.map((rocket) => ({
        id: rocket.id,
        name: rocket.name,
        description: rocket.description,
        flickr_images: rocket.flickr_images,
        reserved: state.reserveRockets.includes(rocket.id),
      }));
      state.rockets = result;
    });
    builder.addCase(getRockets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { reserveRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
