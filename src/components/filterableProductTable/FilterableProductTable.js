import React, { Component } from 'react';
import './FilterableProductTable.css';
import SearchBar from '../searchbar/SearchBar';
import ProductTable from '../productTable/ProductTable';

export default class extends Component {
  state = {
    products: this.props.products,
    searchParams: '',
    filtered: [],
  };

  //search
  handleOnChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      this.handleFilter
    );
  };

  //filter
  handleFilter = () => {
    const dataCopy = [...this.state.products.data];

    const filteredArr = dataCopy.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(this.state.searchParams.toLocaleLowerCase())
    );
    this.setState({
      filtered: filteredArr,
    });
  };

  render() {
    return (
      <div className="filterable">
        <h1>IronStore</h1>
        <div className="field"></div>
        <SearchBar
          products={this.state.products}
          handleOnChange={this.handleOnChange}
        ></SearchBar>
        <ProductTable filtered={this.state.filtered}></ProductTable>
      </div>
    );
  }
}
