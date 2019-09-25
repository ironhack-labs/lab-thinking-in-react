import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label for="site-search">Search the site:</label>
        <input type="search" id="site-search" name="q" />
      </div>
    );
  }
}
