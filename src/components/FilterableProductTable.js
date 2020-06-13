import React, { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    filtered: this.props.products.data,
  };

  filterProductsHandler = (input) => {
    const filtered = this.state.products.filter((el) => {
      return el.name.toLowerCase().includes(input.toLowerCase());
    });

    this.setState({
      filtered: filtered,
    });
  };

  filterCheckboxHandler = (input) => {
    const filtered = this.state.products.filter((el) => {
      if (input) {
        return el.stocked === input;
      } else {
          return el
      }
    });
    this.setState({
      filtered: filtered,
    });
  };

  render() {
    return (
      <div>
        <h1>Iron Store</h1>
        <SearchBar
          filterCheckBox={this.filterCheckboxHandler}
          filterProducts={this.filterProductsHandler}
        />
        <ProductTable products={this.state.filtered} />
      </div>
    );
  }
}

export default FilterableProductTable;
