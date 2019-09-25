import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label for="site-search">Search the site:</label>
        <input
          type="search"
          id="site-search"
          name="q"
          onChange={event => this.props.search(event.target.value)}
        />
        <label class="inStock">
          In Stock:
          <input
            name="inStock"
            type="checkbox"
            // checked={event => this.props.checked(event.target.value)}
            onClick={event => this.props.checked(event.target.checked)}
          />
        </label>
      </div>
    );
  }
}
