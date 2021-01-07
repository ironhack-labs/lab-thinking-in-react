import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <label>
          <input onChange={this.handleSearch} type="text"></input>
        </label>
      </div>
    );
  }
}
