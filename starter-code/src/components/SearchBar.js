import React, { Component } from "react";
import { data } from "../data.json";

export let copy = [...data];

class SearchBar extends Component {
  render() {
    return <input id="search" placeholder="Search" />;
  }
}

export default SearchBar;