import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      checkStock: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleCheckStockChange = this.handleCheckStockChange.bind(this);
  }

  handleSearchChange(e) {
    this.setState({
      search: e.target.value
    });
  }

  handleCheckStockChange(e) {
    this.setState({
      checkStock: e.target.checked
    });
  }

  render() {
    let filteredProducts = this.state.checkStock
      ? this.props.products
          .filter(product =>
            product.name.toLowerCase().includes(this.state.search.toLowerCase())
          )
          .filter(product => product.stocked)
      : this.props.products.filter(product =>
          product.name.toLowerCase().includes(this.state.search.toLowerCase())
        );

    return (
      <div>
        <SearchBar
          onSearch={this.handleSearchChange}
          onCheck={this.handleCheckStockChange}
        />
        <ProductTable products={filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
