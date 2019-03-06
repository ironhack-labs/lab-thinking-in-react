import React, { Component } from "react";

class SearchBar extends Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <div>
        <form className="form">
          <input
            className="input is-info"
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
          <p className="subtitle">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={this.handleInStockChange}
            />
            {""}
            Only show products in stock
          </p>
        </form>
      </div>
    );
  }
}

export default SearchBar;
