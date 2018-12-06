import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" name="search" id="" placeholder="Search..."/> <br/>
        <input type="checkbox" name="stock" id=""/>Only show products in stock
      </div>
    )
  }
}
