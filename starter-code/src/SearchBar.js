import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = e => {
    this.props.updateSearchText(e.target.value);
  };

  handleCheckboxChange = e => {
    this.props.handleCheckboxChange(e);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <label htmlFor="search">Search</label>
        <br />
        <input
          className="searchbar"
          value={this.props.search}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="stocked"
          id="stock"
          checked={this.props.stocked}
          onChange={this.handleCheckboxChange}
        />
        <label htmlFor="stocked">Only show products on stock</label>
      </div>
    );
  }
}

export default SearchBar;
