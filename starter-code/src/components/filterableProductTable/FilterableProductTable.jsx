import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './productTable/ProductTable';

export default class FilterableProductTable extends React.Component {
  render() {
    console.log(this.props.products)

    return (
      <React.Fragment>
        <h1>IronStore</h1>

        <SearchBar products={this.props.products}></SearchBar>
        <ProductTable products={this.props.products}></ProductTable>
      </React.Fragment>
    );
  }
}
