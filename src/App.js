import React, { Component } from 'react';
//importing components
import Image from "./components/Image";
import Score from "./components/Score";
import TopScore from './components/TopScore';
import Status from './components/Status'
//importing data from images and messages
import images from "./images.json"
import messages from "./messages.json"
import './App.css';

import anime from 'animejs';

class App extends Component {
  //the state manages the array of image objects, the score, topscore, and current status message so that these things
  //can be rerendered when updated
  state = {
    images,
    score: 0,
    topscore: 0,
    status: messages.def
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
      
      //increase the user's score and rerender the images and pick a random correct message
      await this.setState({
                      score: this.state.score + 1,
                      images: images,
                      status: messages.cor[Math.floor(Math.random()*3)] 
                    }
      )
      //if the current score is greater than the topscore, update the topscore
      if (this.state.score >= this.state.topscore){
        this.setState({
          topscore: this.state.score
        })
      }
      //animation that plays when status is updated
      anime({
        targets: ".statusMessage",
        keyframes:[
          {color:"#ff0000"},
          {color:"#FFF" }
        ],
        duration: 1750,
        easing: "easeOutBack"
      })

    }
    else{
      //reset the clicked state of every image
      images.forEach(image =>{
        image.clicked = false;
      });
      //shuffle the images
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
      //reset the score to zero and rerender the images
      this.setState({
                      score: 0,
                      images: images,
                      status: messages.inc[Math.floor(Math.random()*3)] 
                    }
      )
      //shake animation to give user feedback of wrong answer
      anime({
        targets: ".allImages",
        keyframes: [
          {translateX: -10},
          {translateX: +10},
          {translateX: +10},
          {translateX: -10},
          {translateX: -10},
          {translateX: +10},
          {translateX: +10},
          {translateX: -10},
          {translateX: -10},
          {translateX: +10},
          {translateX: -10},
          {translateX: +10},
          {translateX: +10},
          {translateX: -10},
          {translateX: -10},
          {translateX: +10},
          {translateX: +10},
          {translateX: -10},
          {translateX: -10},
          {translateX: +10}
        ],
        duration: 750,
        easing: 'easeInOutCirc'
      })
      //animating status message
      anime({
        targets: ".statusMessage",
        keyframes:[
          {color:"#ff0000"},
          {color:"#FFF" }
        ],
        duration: 1750,
        easing: "easeOutBack"
      })
    }
  }
  render (){
    return(
    <div className="main">
      <div className="navcon">
      <nav className="navbar">
      <ul className="nav">
        <li className="nav-item">
          <h4 className="brand">Cartoon Clicky!</h4>
        </li>
        <li className="nav-item">
          <Status
            status = {this.state.status}
          />
        </li>
        <li className="nav-item">
          <Score
            score = {this.state.score}
          />
           |
          <TopScore
            topscore= {this.state.topscore}
          />
        </li>
      </ul>
      </nav>
      </div>
      <div className="jumbotron">
          <h3 className="display-4">A Memory Game</h3>
          <p>Try to click on every image without clicking on the same one twice! Images will be shuffled after every click
            so be sure to stay focused. Good Luck!
          </p>
        </div>
      <div className="container">
    
        
        <div className="row allImages">
          {/* the images will be rendered by using an image compenent for every image in the array */}
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
    </div>
    )
  }
    
}

export default App;
