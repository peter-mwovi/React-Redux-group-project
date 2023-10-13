import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missionsSlice';
import space from '../assets/space3.jpg';
import Missionslist from './Missionslist';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <div className="missions" style={{ backgroundImage: `url(${space})` }}>
      <Missionslist
        missions={missions}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Missions;
