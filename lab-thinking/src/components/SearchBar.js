import React, { Component } from "react";
import data from "../data.json";

class SearchBar extends Component {
  constructor() {
    super();
  }

  sendSearch = e => {
    this.props.newSearch(e.target.value);
  };

  sendCheckbox = e => {
    this.props.isChecked (e.target.checked);
    
  }

  render() {
    return (
      <div style={{ border: "green" }}>
        <input
          onChange={e => this.sendSearch(e)}
          type="text"
          placeholder="Search.."
        />
        <input type="checkbox" name="stock" unchecked onChange={(e)=> {this.sendCheckbox(e)}} />
      
      </div>
    );
  }
}

export default SearchBar;
