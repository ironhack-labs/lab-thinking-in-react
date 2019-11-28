import React, { Component } from 'react';

export class SearchBar extends Component {
  handleChange = event => {
    this.props.setQuery(event.target.value);
  };

  handleCheckboxChange = event => {
    this.props.setCheckbox(event.target.checked);
  };

  render() {
    return (
      <div style={{margin:"20px"}}>
        <div  style={{margin:"5px"}}>
          <label htmlFor="search">Search </label>
          <input
            type="text"
            name="query"
            value={this.props.query}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="inStock"
            name="inStock"
            checked={this.props.inStock}
            onChange={this.handleCheckboxChange}
          />
          <label htmlFor="inStock">Only show products in stock </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
