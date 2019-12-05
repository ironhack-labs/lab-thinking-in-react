import React, { Component } from "react";




export default class SearchBar
 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className = "SearchBar">
     <h3>Search</h3>
     <input type="text" placeholder="Search"/>
     <input type = "checkbox"></input>
      <p> Only show products on Stock </p>
      </div>
    );
  }
}