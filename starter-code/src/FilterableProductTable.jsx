import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data
  };
  searchChange = e => {
    const copy = this.props.products.data;
    //search word
    if (e.target.name === 'query') {
      const s = e.target.value;
      const search = s.toUpperCase();
      var filteredName = copy.filter(product =>
        product.name.toUpperCase().includes(search)
      );
      this.setState({ products: filteredName });
      //search stock
    } else if (e.target.name === 'is-in-stock') {
      if (e.target.checked === true) {
        //Looking only for products in stock
        var filteredStock = copy.filter(product => product.stocked === true);
        this.setState({ products: filteredStock });
      } else if (e.target.checked === false) {
        this.setState({ products: copy });
      }
    }
  };

  render() {
    return (
      <>
        <h1>IronMarket</h1>
        <SearchBar clbk={this.searchChange} />
        <ProductTable products={this.state.products} />
      </>
    );
  }
}
