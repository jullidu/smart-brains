import React from 'react';
import Tilt from 'react-tilt';
import brain from './icon-brain.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='logo-box'>
      <Tilt className="Tilt" options={{ max: 50 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner"><img src={brain} alt="icon-brain" /> </div>
      </Tilt>
    </div>
  )
}

export default Logo