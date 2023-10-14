import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';
import space from '../assets/space3.jpg';
import Rocketslist from './Rocketslist';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  return (
    <div className="rockets" style={{ backgroundImage: `url(${space})` }}>
      <Rocketslist
        rockets={rockets}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Rockets;
