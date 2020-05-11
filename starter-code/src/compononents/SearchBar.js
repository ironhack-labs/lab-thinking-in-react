import React, { Component } from 'react';

class SearchBar extends Component {
  //events are passed down as props but triggered upwards
  handleSearch = (event) => {
    this.props.handleSearch(event.target.value);
  };
  //sends search string to state within filterableproductTAble  as a variable
  // props is passed down from filterableproducttable (search as prop)

  handleCheck = (event) => {
    this.props.handleCheckbox(event.target.checked);
  };

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form className="search-form-container">
          <input
            className="searchbar"
            type="text"
            name="search"
            value={this.props.search}
            onChange={this.handleSearch}
          />
          <div>
            <input
              type="checkbox"
              name="instock"
              id="instock"
              value={this.props.checked}
              onChange={this.handleCheck}
            />
            <label htmlFor="in-stock">Only show products in stock</label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
