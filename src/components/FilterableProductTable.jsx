import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import CheckBox from './CheckBox';

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

  displayInStock = (event) => {
    this.setState({
      products: event.target.checked ? this.state.products.filter(elm => elm.stocked === true) : this.props.products,
    });
  }

  render() {
    const products = this.state.products
      .filter(product => this.state.input === '' || product.name.toLowerCase().slice(0,this.state.length).includes(this.state.input));
    return (
      <div>
        <SearchBar input={this.state.input} handleFilter={this.displayFilterproduct} />
        <CheckBox handleChecked={this.displayInStock} />
        <ProductTable products={products} />
      </div>
    );
  }
}

export default FilterableProductTable;
