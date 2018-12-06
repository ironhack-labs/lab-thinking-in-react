import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.searchFunction} type="text" className="search-input" name="search" placeholder="Search..."></input>
          <br/>
        <input onChange={this.props.stockFunction} type="checkbox" className="search-input" name="inStock"/><label htmlFor="inStock">Only show products in stock</label>
      </div>
    )
  }
}
