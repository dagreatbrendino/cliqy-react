import React, { Component } from "react";
import "./style.css";

class Image extends Component{
    
    render() {
        return(
            <div className="col-3 clickable"> 
                <div className="img-con"
                    style={{ 
                        backgroundImage : `url(${this.props.url})`
                    }}
                    onClick={()=> this.props.submitClick(this.props.clicked, this.props.id)}>
                </div>

            </div>
        )
    }

}

export default Image;