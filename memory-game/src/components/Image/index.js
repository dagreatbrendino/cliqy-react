import React, { Component } from "react";
import "./style.css";

class Image extends Component{
    state = {
        clicked: this.props.clicked,
        id: this.props.id,
        url: this.props.url
    }

    render() {
        return(
            <div className="col-3">
                 <img className="image img-fluid" src={this.state.url}></img>
            </div>
        )
    }

}

export default Image;