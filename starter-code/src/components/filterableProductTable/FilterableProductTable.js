import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar.js';
import ProductTable from '../productTable/ProductTable.js';
import data from '../../data.json';

export default class FilterableProductTable extends Component {
  state = {
    product: data,
    filterData: '',
    check: false,
  };

  handleFilter = (el) => {
    this.setState({
      filterData: el,
    });
  };

  handleCheck = (el) => {
    this.setState({
      check: el,
    });
  };
  // handleFilter = (el) => {
  //   const { product } = this.state;

  //   this.setState({
  //     filterData: product['data'].filter((element) => {
  //       element.name.toLowerCase().includes(el.toLowerCase());
  //     }),
  //   });
  // };

  render() {
    const { product, filterData: filter, check } = this.state;
    let data;

    if (check) {
      data = product['data'].filter(
        (product) =>
          product.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0 &&
          product.stocked
      );
    } else {
      data = product['data'].filter(
        (product) =>
          product.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
      );
    }

    return (
      <div>
        <h1>Search</h1>
        <SearchBar onChange={this.handleFilter} onCheck={this.handleCheck} />

        {/* {filter.map((el, index) => (*/}
        <ProductTable product={data} />
        {/* ))} */}
      </div>
    );
  }
}
