import React, { Component } from 'react'
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input className="searchBar" type="text" placeholder="search..."/> 
        <div className="checkbox-container">
        <input type="checkbox"/> <span>Only show products in stock</span>

        </div>
       
      </div>
    )
  }
}
