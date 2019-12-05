import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './productTable/ProductTable';
import data from '../../data.json';

export default class FilterableProductTable extends React.Component {
  constructor() {
    super();
    this.products = [...data.data];

    this.state = {
      products: this.products,
      stockChecked: false
    };
  }

  findProducts(e) {
    let products = [...this.products];
    let productsFiltered;

    productsFiltered = products.filter(product =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    this.setState({
      ...this.state,
      products: productsFiltered
    });
  }

  inStock(e) {
    this.state.stockChecked = !this.state.stockChecked;
    let products = [...this.products];
    let productsInStock = products.filter(product => product.stocked === true);
    let productsResult;

    this.state.stockChecked ? productsResult = productsInStock : productsResult = products

    this.setState({
      ...this.state,
      products: productsResult
    });
  }

  render() {
    return (
      <React.Fragment>
        <h1>IronStore</h1>

        <SearchBar
          products={this.state.products}
          findProducts={e => this.findProducts(e)}
          inStock={e => this.inStock(e)}
        ></SearchBar>
        <ProductTable products={this.state.products}></ProductTable>
      </React.Fragment>
    );
  }
}
