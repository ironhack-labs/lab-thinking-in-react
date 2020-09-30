import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../productTable/ProductTable';

export default class extends Component {
  state = {
    products: this.props.products,
    searchParams: '',
    filtered: [],
    inStock: false,
  };

  //search
  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.handleFilter,
      () => this.handleStock
    );
  };

  //filter
  handleFilter = () => {
    const dataCopy = [...this.state.products.data];

    let filterInStock = [];
    if (this.state.inStock === true) {
      filterInStock = dataCopy.filter((element) => element.stocked === true);
    } else {
      filterInStock = dataCopy;
    }

    console.log(`TOGGLE FILTER CHECKBOX `, filterInStock);

    const filteredArr = filterInStock.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(this.state.searchParams.toLocaleLowerCase())
    );
    this.setState(
      {
        filtered: filteredArr,
        stock: filterInStock,
      },
      () => this.handleOnChange
    );
  };

  //inStock
  handleStock = () => {
    const inStock = this.state.inStock;
    this.setState(
      {
        inStock: !inStock,
      },
      () => console.log(`In Stock State`, this.state.inStock)
    );
  };

  render() {
    return (
      <div className="filterable">
        <h1>IronStore</h1>
        <div className="field"></div>
        <SearchBar
          products={this.state.products}
          handleOnChange={this.handleOnChange}
          handleStock={this.handleStock}
        ></SearchBar>
        <ProductTable
          filtered={this.state.filtered}
          stock={this.state.inStock}
        ></ProductTable>
      </div>
    );
  }
}
