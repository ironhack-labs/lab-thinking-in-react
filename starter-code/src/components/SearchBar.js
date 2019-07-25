import React, { Component } from 'react'

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>Search</label>
        <input type='text' name="search" onChange={(ev) => this.props.searchWord(ev)} ></input>
      </div>
    )
  }
}

export default SearchBar;
