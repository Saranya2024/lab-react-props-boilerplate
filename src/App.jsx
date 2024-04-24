import React from 'react';
import './App.css';
import Data from './components/DataComponent';

function App() {
  return (
    <div className="App">
      <h1>Kalvium Gallary</h1>
      {Data.map(image => (
        <ImageComponent key={image.id} id={image.id} img={image.img} />
      ))}
    </div>
  );
}

function ImageComponent(props) {
  return (
    <img key={props.id} src={props.img} alt={`Elephant ${props.id}`} />
  );
}

export default App;
