import React from 'react';
import earth from '../assets/earth-italy.jpg';
import Profiledetails from './Profiledetails';
import Profiledetailsb from './Profiledetailsb';

const Myprofile = () => (
  <div className="profile" style={{ backgroundImage: `url(${earth})` }}>
    <Profiledetails />
    <Profiledetailsb />
  </div>
);

export default Myprofile;