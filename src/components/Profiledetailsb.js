import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rocketsSlice';

const Profiledetailsb = () => {
  const dispatch = useDispatch();
  const { rockets, reserveRockets } = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, [dispatch]);

  const filteredRockets = rockets.filter((rocket) => reserveRockets
    .includes(rocket.id));

  return (
    <div className="myprofiledivs2">
      <div className="divrockets">
        {filteredRockets.length === 0 ? (
          <div>
            <p className="boldtext">My Rockets</p>
            <p className="normaltext">No reserved rockets!</p>
          </div>
        ) : (
          <div>
            <p className="boldtext">My Rockets</p>
            <ul className="listrockets">
              {filteredRockets.map((rocket) => (
                <li className="lirocket" key={rocket.id}>{rocket.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profiledetailsb;
