import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    filtered: this.props.products.data
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

  filterProductsHandler = (input) => {
    let filtered = this.state.products.filter((el) => {
      return el.name.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({ filtered: filtered });
  };


  render() {
  return (
    <div className="container mx-auto">
      <h1>IronStore</h1>
      <SearchBar products={this.state.products} filterProducts={this.filterProductsHandler} checkboxFilter={this.filterCheckboxHandler}/>
      <ProductTable products={this.state.filtered} />
    </div>
  );
}
}

export default FilterableProductTable;
