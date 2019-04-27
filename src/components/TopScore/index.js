import React, { Component } from "react";
import "./style.css";

class TopScore extends Component{

    render(){
        return (
            <div className="topscore"> Top Score: <span>{this.props.topscore}</span></div>
        )
    }
}

export default TopScore;