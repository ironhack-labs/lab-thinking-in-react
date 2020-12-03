import React, { Component } from 'react';
import './FilterableTable.css';
import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../product-table/ProductTable';

class FilterableTable extends Component {
  state = {
    product: this.props.products.data,
    search: '',
  };

  handleChange = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  render() {
    const filteredProduct = this.state.product.filter((el) => {
      return el.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    console.log(this.state.product);

    return (
      <div className="FilterableProductTable">
        <h1>IronStore</h1>
        <SearchBar handleChange={this.handleChange} />
        <ProductTable product={filteredProduct} />
      </div>
    );
  }
}

export default FilterableTable;
