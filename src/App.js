import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';
import particlesOptions from './particlesjs-config.json';

import './App.css';

function App() {
  return (
    <div className="App" >
      <Particles className='particles'
        params={particlesOptions}
      />
      <div className='header'>
        <Logo />
        <Navigation />
      </div>
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}



    </div>
  );
}

export default App;