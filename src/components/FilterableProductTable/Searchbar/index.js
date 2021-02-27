import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <input name="search" type="text" />
      </div>
    );
  }
}

export default SearchBar;
