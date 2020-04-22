import React, { Component } from "react";
import "./styles.css";

export default class SearchBar extends Component {

  render() {
    return ( 
        <div> 
            <input className="search" onChange={this.props.handleInput}/>
        </div>
    )
  }
}
