import React, { Component } from 'react';
import PropTypes from 'prop-types';
import jsondata from '/Users/sebastianmontoya/Desktop/ironhack/labs/lab-thinking-in-react/src/data.json';

class SearchBar extends Component {
  state = {
    allProducts: jsondata.data,
  };

  search = (e) => {
    console.log(e.target.value);
    let filteredProducts = this.state.allProducts.filter((eachProduct) => {
      return eachProduct.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    this.setState({ allProducts: filteredProducts });
  };

  render() {
    return (
      <div>
        <h3>Search</h3>
        <input onChange={this.search} name="search" type="text" />
      </div>
    );
  }
}

export default SearchBar;
