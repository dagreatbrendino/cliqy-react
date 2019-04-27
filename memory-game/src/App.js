import React, { Component } from 'react';
import Image from "./components/Image";
import Score from "./components/Score";
import logo from './logo.svg';
import images from "./images.json"
import './App.css';
import TopScore from './components/TopScore';

class App extends Component {
  state = {
    images,
    score: 0,
    topscore: 0
  }
  //an async function that will be called when the user clicks an image
  sumbitClick = async (clicked, id) =>{
    //if the image has not been clicked
    if (!clicked){
      //because the order of the images will change, each one will need to be checked to match the id
      images.forEach(image =>{
        //find the image that was clicked by it's id and update it's clicked value
        if (image.id === id){
          image.clicked = true;
        }
      });
      //js implementation of Yates shuffle to randomly shuffle the images
      //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
      //increase the user's score and rerender the images
      await this.setState({
                      score: this.state.score + 1,
                      images: images 
                    }
      )
      //if the current score is greater than the topscore, update the topscore
      if (this.state.score >= this.state.topscore){
        this.setState({
          topscore: this.state.score
        })
      }
    }
    else{
      //reset the clicked state of every image
      images.forEach(image =>{
        image.clicked = false;
      });
      //reset the score to zero and rerender the images
      this.setState({
                      score: 0,
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
        <TopScore
          topscore= {this.state.topscore}
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
