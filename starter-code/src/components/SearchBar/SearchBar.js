import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <input
            className="search"
          type="search"
          name="searchBox"
          placeholder="Search Product"
          onChange={e => this.props.filterProductHandler(e)}
          value={this.props.filterQuery}
        />
        <div className="checkBox">
        <input type="checkbox" name="check" label="Only show products on stock" onClick={e => this.props.filterStock(e)}/>
        <span>Only show products on stock</span>

        </div>
      </div>
    );
  }
}
