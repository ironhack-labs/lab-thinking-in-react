import React, { Component } from 'react';

class SearchBar extends Component {

  handleChange = (e) => {
    this.props.filter(e.target.value);
  }

  render() {
    return (
      <div>
        <p>Search</p>
        <input onChange={this.handleChange} type="text"/>
      </div>
    );
  }
}
export default SearchBar;