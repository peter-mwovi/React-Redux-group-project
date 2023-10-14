import React from 'react';
import Styles from '../Styles/Navbar.module.css';
import './Logo.css';

import spacehub from '../space_hub.png';

const Logo = () => (
  <div className="d-flex justify-content-start">
    <img src={spacehub} alt="Logo" className={Styles.logo} />
    <h1>&nbsp;Space Travelers&apos; Hub</h1>
  </div>
);

export default Logo;
