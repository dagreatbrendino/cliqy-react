import React, { Component } from 'react';
import Image from "./components/Image";
import Score from "./components/Score";
import logo from './logo.svg';
import images from "./images.json"
import './App.css';

class App extends Component {
  state = {
    images,
    score: 0
  }
  sumbitClick = (clicked, id) =>{
    if (!clicked){
      images[id].clicked = true
      console.log(images);
      this.setState({
                      score: this.state.score + 1,
                      images: images 
                    }
      )
    }
  }
  render (){
    return(
      <div className="container">
      <div className="row">
        <Score
          score = {this.state.score}
        />
          
      </div>
      <div className="row">
        {this.state.images.map(image =>(
          <Image 
            id={image.id}
            url={image.url}
            clicked={image.clicked}
            submitClick={this.sumbitClick}
          />
        ))}
      </div>

    </div>
    )
  }
    
}

export default App;
