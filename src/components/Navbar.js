import React from 'react';
import { Link } from 'react-router-dom';
import planet from '../assets/planet_colors.png';

const Navbar = () => (
  <div className="divnavbar">
    <div className="divnav">
      <img className="planetlogo" src={planet} alt="Planet" width="40" height="40" />
      <span className="sitename">Space Travelers&apos; Hub</span>
      <span className="divider1">&nbsp;</span>
      <nav className="navbar">
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <span className="divider">|</span>
        <Link to="/myprofile">My Profile</Link>
      </nav>
    </div>
  </div>
);

export default Navbar;
