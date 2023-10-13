import React from 'react';
import earth from '../assets/earth-italy.jpg';
// import Myprofilelist from './Myprofilelist';

const Myprofile = () => (
  <div className="profile" style={{ backgroundImage: `url(${earth})` }}>
    <h1>My Profile List here...</h1>
    {/* <Rocketslist rockets={rockets} /> */}
    {/* <Missionslist missions={missions} /> */}
  </div>
);

export default Myprofile;
