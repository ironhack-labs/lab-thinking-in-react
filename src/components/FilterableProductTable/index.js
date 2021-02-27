import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './Searchbar';
import ProductTable from './ProductTable';
import ProductRow from './ProductTable/ProductRow';
import jsondata from '/Users/sebastianmontoya/Desktop/ironhack/labs/lab-thinking-in-react/src/data.json';

class FilterableProductTable extends Component {
  state = {
    products: jsondata.data,
  };

  showProducts = () => {
    return this.state.products.map((eachProduct) => {
      return <ProductRow {...eachProduct} />;
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <br />
        <ProductTable />
        {this.showProducts()}
      </div>
    );
  }
}

export default FilterableProductTable;
