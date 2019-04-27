import React, { Component } from 'react';
import Image from "./components/Image";
import logo from './logo.svg';
import images from "./images.json"
import './App.css';

class App extends Component {
  state = {
    images
  }
  render (){
    return(
      <div className="container">
      <div className="row">
        {this.state.images.map(image =>(
          <Image 
            id={image.id}
            url={image.url}
            clicked={image.clicked}
          />
        ))}
      </div>

    </div>
    )
  }
    
}

export default App;
