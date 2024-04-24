import React, { Component } from "react";
import "./App.css";
import Data from "./components/DataComponent";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h1>Kalvium Gallary</h1>
        {Data.map(image => (
          <Image key={image.id} id={image.id} img={image.img} />
        ))}
      </div>
    );
  }
}

// Define a new component to represent each image
class Image extends Component {
  render() {
    const { id, img } = this.props;
    return (
      <img key={id} src={img} alt={`Elephant ${id}`} />
    );
  }
}
