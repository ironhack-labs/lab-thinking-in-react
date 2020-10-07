import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  state = {
    products: this.props.products,
    input: "",
    length: 0,
  };

  displayFilterproduct = (event) => {
    this.setState({
      input: event.target.value,
      length: event.target.value.length,
    })
  };

  render() {
    console.log(this.state.products);
    const products = this.state.products
      .filter(product => this.state.input === '' || product.name.toLowerCase().slice(0,this.state.length).includes(this.state.input));
    return (
      <div>
        <SearchBar input={this.state.input} handleFilter={this.displayFilterproduct} />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
