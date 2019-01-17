import React, { Component } from "react";

export default class SearchBar extends Component {

  render() {
    return (
      <div>
        <input type="text" placeholder="Search" onChange={(p)=>this.props.handleSearch(p)}/>
        <input type="checkbox" onClick={this.props.handleStock}/>Only show product in Stock
     </div>
    );
  }
}