import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Particles from "react-particles-js";
import particlesOptions from "./particlesjs-config.json";
import Clarifai from "clarifai";
import "./App.css";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

const app = new Clarifai.App({
  apiKey: "d2995783a7224ab7b39c77caf34a26e4"
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      imgUrl: "",
      box: {},
      route: "signin"
    };
  }

  // componentDidMount() {
  //   fetch("http://localhost:3000/")
  //     .then(response => response.json())
  //     .then(console.log);
  // }

  calculateFaceLocation = data => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImg");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height
    };
  };

  displayFaceBox = box => {
    // console.log(box)
    this.setState({
      box: box
    });
  };

  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };

  onButtonSubmit = () => {
    this.setState({
      imgUrl: this.state.input
    });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response =>
        this.displayFaceBox(this.calculateFaceLocation(response))
      )
      .catch(err => console.log(err));
  };

  onRouteChange = route => {
    this.setState({
      route: route
    });
  };

  render() {
    const { route, box, imgUrl } = this.state;
    return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        {route === "home" ? (
          <div>
            <div className="header">
              <Logo />
              <Navigation onRouteChange={this.onRouteChange} />
            </div>
            <Rank />
            <ImageLinkForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceRecognition box={box} imgUrl={imgUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
