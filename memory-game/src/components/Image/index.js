import React, { Component } from "react";
import "./style.css";

class Image extends Component{
    render() {
        return(
            <div className="col-3">
                 <img className="image img-fluid" src={this.props.url}
                    onClick={()=> this.props.submitClick(this.props.clicked, this.props.id)}></img>
            </div>
        )
    }

}

export default Image;