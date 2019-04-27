import React, { Component } from "react";
import "./style.css";
//this Status Component is used to give the user feedback about their clicks
class Status extends Component{

    render(){
        return (
            <div class="status"><span>{this.props.status}</span></div>
        )
    }
}

export default Status;