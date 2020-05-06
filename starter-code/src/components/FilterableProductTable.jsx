import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export class FilterableProductTable extends Component {
  state = {
    search: '',
    checked: false,
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  handleChecked = (event) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    const allProducts = this.props.products.data;
    const filteredArray = allProducts.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    const stockedProducts = filteredArray.filter((product) => {
      return product.stocked;
    });

    if (this.state.checked) {
      return (
        <div className="filterable-table">
          <SearchBar
            handleSearch={this.handleSearch}
            handleChecked={this.handleChecked}
          />
          <ProductTable products={stockedProducts} />
        </div>
      );
    } else {
      return (
        <div className="filterable-table">
          <SearchBar
            handleSearch={this.handleSearch}
            handleChecked={this.handleChecked}
          />
          <ProductTable products={filteredArray} />
        </div>
      );
    }
  }
}

export default FilterableProductTable;
