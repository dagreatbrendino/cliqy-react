import React, { Component } from "react";
import "./style.css";

class Score extends Component{

    render(){
        return (
            <div class="score">Score: <span>{this.props.score} </span></div>
        )
    }
}

export default Score;