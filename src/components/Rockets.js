import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsActions';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.data);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div>
      <h1>Rockets</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
