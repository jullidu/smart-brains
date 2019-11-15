import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import particlesOptions from './particlesjs-config.json';
import Clarifai from 'clarifai';
import './App.css';


const app = new Clarifai.App({
  apiKey: 'd2995783a7224ab7b39c77caf34a26e4'
});

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      imgUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input })

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    ).then(
      function (response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function (err) {
        // there was an error
      }
    );

  }

  render() {

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
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imgUrl={this.state.imgUrl} />
      </div>
    )
  }
}

export default App;