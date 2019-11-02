import React, { Component } from 'react';
import InputField from './InputField';

class SearchBar extends Component {
  handleInputChange = e => {
    this.props.filterProducts(e.target.value)
  }

  render() {
    return (
      <div className="SearchBar">
        <InputField name="searchTerm" type="text" onChange={this.handleInputChange} label="Search" placeholder="Enter your search"  />
      </div>
    )
  }
}

export default SearchBar
