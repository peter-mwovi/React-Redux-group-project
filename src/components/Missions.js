import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import Missionslist from './Missionslist';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };

  return (
    <div className="missions" style={{ backgroundImage: 'white' }}>
      <Missionslist
        missions={missions}
        loading={loading}
        error={error}
        handleJoinMission={handleJoinMission}
        handleLeaveMission={handleLeaveMission}
      />
    </div>
  );
};

export default Missions;
