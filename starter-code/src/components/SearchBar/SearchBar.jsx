import React, { Component } from 'react';

export default class SearchBar extends Component {

  

  render() {
    return (
      <form className="col-12">
        <input type="text" className="form-control" width="250px" placeholder="Search Products..." onChange={this.props.searchProducts} />
        <input type="checkbox" name="filterOutOfStock" onClick={this.props.filterOutofStock} /> 
        <label htmlFor="filterOutOfStock">Out of Stock Items</label>
      </form>
    );
  }
}
