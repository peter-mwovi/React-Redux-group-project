import React from 'react';
import PropTypes from 'prop-types';

const Rocketslist = ({
  rockets, loading, error, handleReserveRocket, handleCancelRocket,
}) => {
  if (loading) {
    return (
      <div>Loading...</div>
    );
  } if (error) {
    return (
      <div>
        Error:
        {' '}
        {error}
      </div>
    );
  }
  return (
    <div className="rocketsdiv">
      <div className="separator" />
      <hr />
      <ul className="table">
        {rockets.map((rocket) => (
          <li key={rockets.id} className="rocketname">
            <div className="rocketimg">
              <img src={rocket.flickr_images[0]} alt="rocket" height="125px" width="250px" />
            </div>
            <div className="rocketstatus">
              <span className="rocket">{rocket.name}</span>
              <span className="descrocket">
                {rocket.reserved ? (
                  <span className="status">
                    Reserved
                  </span>
                )
                  : (
                    <span className="status1">
                      Reserved
                    </span>
                  )}
                {rocket.description}
              </span>
              <span>
                {rocket.reserved ? (
                  <button
                    className="button3b"
                    type="button"
                    onClick={() => handleCancelRocket(rocket.id)}
                  >
                    Cancel Reservation
                  </button>
                ) : (
                  <button
                    className="button3"
                    type="button"
                    onClick={() => handleReserveRocket(rocket.id)}
                  >
                    Reserve Rocket
                  </button>
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="footer" />
    </div>
  );
};

Rocketslist.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      flickr_images: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  handleReserveRocket: PropTypes.func.isRequired,
  handleCancelRocket: PropTypes.func.isRequired,
};

Rocketslist.defaultProps = {
  error: null,
};

export default Rocketslist;
