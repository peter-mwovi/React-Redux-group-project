import React from 'react';
import PropTypes from 'prop-types';

const MissionsList = ({
  missions, loading, error, handleJoinMission, handleLeaveMission,
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
          <tr className="white">
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id} className="rows">
              <td className="first">{mission.mission_name}</td>
              <td className="second">{mission.description}</td>
              <td className="third">
                {mission.joined ? (
                  <button className="button1b" type="button">
                    Active Member
                  </button>
                ) : (
                  <button className="button1" type="button">
                    NOT A MEMBER
                  </button>
                )}
              </td>
              <td className="fourth">
                {mission.joined ? (
                  <button
                    className="button2b"
                    type="button"
                    onClick={() => handleLeaveMission(mission.mission_id)}
                  >
                    Leave Mission
                  </button>
                ) : (
                  <button
                    className="button2"
                    type="button"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
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
      mission_id: PropTypes.string.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      joined: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool,
  handleJoinMission: PropTypes.func.isRequired,
  handleLeaveMission: PropTypes.func.isRequired,
};

MissionsList.defaultProps = {
  error: null,
};

export default MissionsList;
