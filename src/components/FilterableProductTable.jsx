import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
  };

  displayFilterproduct = (event) => {
    console.log(this.state.products, "thisiiiiiiiiiiii");
    this.setState({
      products: this.state.products.filter((prd) => {
        prd.name.includes(event.target.value);
      }),
    });
  };

  render() {
    const products = this.state.products;
    return (
      <div>
        <SearchBar handleFilter={this.displayFilterproduct} />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
