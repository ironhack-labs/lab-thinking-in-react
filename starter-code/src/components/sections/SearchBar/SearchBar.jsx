import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
        <ol className="search-bar">
          <li>
            <label>Search</label>
            <input type="text"/>
          </li>
          <li>
            <input type="checkbox"/>
            <label>Only show products on stock</label>
          </li>
        </ol>
    )
  }
}
