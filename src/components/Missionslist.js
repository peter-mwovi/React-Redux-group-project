import React from 'react';
import PropTypes from 'prop-types';

const MissionsList = ({
  missions, loading, error,
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
    <div className="missionsdiv">
      <div className="separator" />
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.mission_id} className={index % 2 === 0 ? 'gray' : 'white'}>
              <td className="first">{mission.mission_name}</td>
              <td className="second">{mission.description}</td>
              <td className="third">
                <button className="button1" type="button">
                  NOT A MEMBER
                </button>
              </td>
              <td className="fourth">
                <button className="button2" type="button">
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer" />
    </div>
  );
};

MissionsList.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.number.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};

MissionsList.defaultProps = {
  error: null,
};

export default MissionsList;
