import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets, reserveRocket, cancelRocket } from '../redux/rockets/rocketsSlice';
import space from '../assets/space3.jpg';
import Rocketslist from './Rocketslist';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const handleReserveRocket = (rocketId) => {
    dispatch(reserveRocket(rocketId));
  };

  const handleCancelRocket = (rocketId) => {
    dispatch(cancelRocket(rocketId));
  };

  return (
    <div className="rockets" style={{ backgroundImage: `url(${space})` }}>
      <Rocketslist
        rockets={rockets}
        loading={loading}
        error={error}
        handleReserveRocket={handleReserveRocket}
        handleCancelRocket={handleCancelRocket}
      />
    </div>
  );
};

export default Rockets;
