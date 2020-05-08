import React, { Component } from 'react';
import data from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    product: data.data,
    search: '',
    checked: false,
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleChecked = (event) => {
    if (event.target.checked) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    //DO I HAVE TO USE THE SPREAD OPERATOR HERE ?
    const filteredProd = [
      ...this.state.product.filter((prod) => {
        if (this.state.checked === true) {
          return (
            prod.stocked === true &&
            prod.name.toLowerCase().includes(this.state.search.toLowerCase())
          );
        } else {
          return prod.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());
        }
      }),
    ];

    return (
      <div>
        <SearchBar clbk={this.handleSearch} checked={this.handleChecked} />

        <ProductTable data={filteredProd} />
      </div>
    );
  }
}

export default FilterableProductTable;
