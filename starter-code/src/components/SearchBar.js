import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onFilterChange(e.target.value);
  }
  
  render() {
    return (
      <input type='text' value={this.props.filter} onChange={this.handleChange}></input>
    );
  }
}

export default SearchBar;
