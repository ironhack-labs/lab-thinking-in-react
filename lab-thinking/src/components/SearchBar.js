import React, { Component } from "react";
import data from "../data.json";

class SearchBar extends Component {
  constructor() {
    super();
  }

  render() {
    return (<div style={{border: 'green'}}>
    <input type='text' placeholder='Search..'/>
    <input type='checkbox' name='stock'/>
    <p>Hola marte</p>
    </div>
    );
  }
}

export default SearchBar;