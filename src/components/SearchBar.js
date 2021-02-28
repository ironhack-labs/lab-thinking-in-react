import React, { Component } from 'react';

class SearchBar extends Component {


    render() {
    return (
      <div>
        <p>Search</p>
        <input
          type="text"
          name="search"
          value={this.props.state.search}
          onChange={this.props.handleInput}
        />
        <br />
        <input
          type="checkbox"
          name="stocked"
          checked={this.props.state.stocked}
          onChange={this.props.handleInput}
        />
        <label htmlFor="checked">Only show products in stock</label>
      </div>
    );
  }
}

export default SearchBar;
