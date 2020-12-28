import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import ProductTable from '../ProductTable/ProductTable.js';
import './FilterableProductTable';

class FilterableProductTable extends Component {
  state = {
    search: '',
    products: this.props.products.data,
  };

  componentDidMount() {}

  handleChange = (search) => {
    this.setState({
      search: search,
    });
  };

  render() {
    const productsafterSearch = this.state.products.filter((el) => {
      return el.name.toLowerCase().includes(this.state.search.toLowerCase());
    });

    return (
      <div className="filtered">
        <h1>IronStore</h1>
        <SearchBar
          products={this.state.products}
          handleChange={this.handleChange}
          search={this.state.search}
        />
        <ProductTable data={productsafterSearch} />
      </div>
    );
  }
}

export default FilterableProductTable;
