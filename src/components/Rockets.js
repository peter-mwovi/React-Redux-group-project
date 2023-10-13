import React from 'react';
import space from '../assets/space3.jpg';
// import Rocketlist from './Rocketlist';

const Rockets = () => (
  <div className="rockets" style={{ backgroundImage: `url(${space})` }}>
    <h1>A Rocket&apos;s List here...</h1>
    {/* <Rocketslist rockets={rockets} /> */}
  </div>
);

export default Rockets;
