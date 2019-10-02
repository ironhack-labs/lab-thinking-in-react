import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div id="searchdiv">
        <form action="" onChange={(e) => {this.props.handleSearch(e)}}>
          <label htmlFor="search">Search</label>
          <input type="text" name="search" id="search"/>
        </form>
        <form action="">
          <input type="checkbox"/>
          <label htmlFor="checkbox">show only items in stock</label>
        </form>
      </div>
    )
  }
}
