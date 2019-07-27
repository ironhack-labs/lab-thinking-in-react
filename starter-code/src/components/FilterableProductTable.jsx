import React, { Component, Fragment } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products.data,
      filteredProducts: this.props.products.data,
      query: '',
    }
    this.handleFilter = this.handleFilter.bind(this);
    this.stockFilter = this.stockFilter.bind(this);
  }

  handleFilter(query) {
    let newProducts = [...this.state.products];
    if (query.length > 1) {
      newProducts = newProducts.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
    }
    this.setState({
      filteredProducts: newProducts,
      query: query,
    })
  }

  stockFilter(value) {
    let productsArr = [...this.state.products];
    if (value !== 'true') {
      return productsArr;
    } else {
      productsArr = productsArr.filter(product => product.stocked === true);
    }
    this.setState({
      filteredProducts: productsArr,
    })
  }

  render() {
    return (
      <Fragment>
        <h2>IronStore</h2>
        <SearchBar filterFunc={(query) => this.handleFilter(query)} stockFunc={(value) => this.stockFilter(value)} query={this.state.query}/>
        <ProductTable products={this.state.filteredProducts}/>
      </Fragment>
    )
  }
}

export default FilterableProductTable;