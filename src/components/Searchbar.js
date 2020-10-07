import React, { Component } from 'react';

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="searchbar" />
          <input type="checkbox" name="stock" />
          <label>Only show products on stock</label>
        </form>
      </div>
    );
  }
}
