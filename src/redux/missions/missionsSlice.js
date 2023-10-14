import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMissions', async () => {
  const response = await axios.get(url);
  return response.data;
});

const initialState = {
  missions: [],
  loading: false,
  error: null,
  joinedMissions: [],
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      state.joinedMissions.push(payload);
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
    },
    leaveMission: (state, { payload }) => {
      state.joinedMissions = state.joinedMissions.filter((missionId) => missionId !== payload);
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMissions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getMissions.fulfilled, (state, { payload }) => {
      state.loading = false;
      const result = payload.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
        joined: state.joinedMissions.includes(mission.mission_id),
      }));
      state.missions = result;
    });
    builder.addCase(getMissions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { joinMission, leaveMission } = missionsSlice.actions;
export default missionsSlice.reducer;
