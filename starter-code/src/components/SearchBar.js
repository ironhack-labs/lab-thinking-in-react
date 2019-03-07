import React, { Component } from 'react';

class searchBar extends Component {
  render() {
    return (
      <form className="searchForm flex column">
        <label for="search">Search</label>
        <input type="text" value="test" name="search" id="search" />
      </form>
    );
  }
}

export default searchBar;
