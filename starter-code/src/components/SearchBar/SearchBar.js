import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search" />
        <input type="checkbox"/>Only show product in Stock
      </div>
    )
  }
}
