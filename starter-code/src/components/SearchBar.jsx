import React, { Component } from 'react';

import data from '../data.json';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchProduct: data,
      query: ''
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
  }

  handleSearchInput(event) {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Search</h2>
          <form>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleSearchInput}
            />
          </form>
        </div>
        <div>
          <form>
            <input type="radio" name="checkBox" id="checkBox" />
            <label>Only show products on stock</label>
          </form>
        </div>
      </div>
    );
  }
}
