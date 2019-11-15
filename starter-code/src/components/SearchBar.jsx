import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">Search</label>
          <input type="text" name="search" id="search" />
        </form>
        <form action="">
          <input type="checkbox" />
          <label htmlFor="checkbox">Only show products in stock</label>
        </form>
      </div>
    );
  }
}
