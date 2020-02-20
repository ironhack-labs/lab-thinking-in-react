import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = e => {
    console.log('This', e.target.value);
    this.props.updateSearchText(e.target.value);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>Search</h3>

        <label>Product:</label>
        <input onChange={this.handleChange} value={this.props.search}></input>
      </div>
    );
  }
}
export default SearchBar;
