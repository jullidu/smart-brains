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
import Signin from './components/Signin/Signin';


const app = new Clarifai.App({
  apiKey: 'd2995783a7224ab7b39c77caf34a26e4'
});

class App extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'singin'
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImg')
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    // console.log(box)
    this.setState({ box: box })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input })

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    ).then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
  }

  onRouteChange = () => {
    this.setState({ route: 'bombur' })
  }

  render() {

    return (
      <div className="App" >
        <Particles className='particles'
          params={particlesOptions}
        />
        {this.state.route === 'singin'
          ? < Signin onRouteChange={this.onRouteChange} />
          : <div>
            <div className='header'>
              <Logo />
              <Navigation onRouteChange={this.onRouteChange} />
            </div>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={this.state.box} imgUrl={this.state.imgUrl} />
          </div>
        }
      </div>
    )
  }
}

export default App;