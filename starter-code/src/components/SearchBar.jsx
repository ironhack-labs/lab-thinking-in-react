import React, { Component } from 'react';
import InputField from './InputField';
import CheckBox from './CheckBox'

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <InputField name="searchTerm" type="text" onChange={this.props.handleSearchDisplay} label="Search" placeholder="Enter your search"  />
        <CheckBox name="inStockCheckBox" text="Only show products in stock" onChange={this.props.handleSearchDisplay} />
      </div>
    )
  }
}

export default SearchBar
