import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div className= "searchBar">
        <input id= "searchInput" type="text"placeholder= "Search..."/>
        <div>
          <input type="checkbox"/>
          <label>Only show products in stock</label>
        </div>
      </div>
    )
  }
}
