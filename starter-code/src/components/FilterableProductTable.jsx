import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {

  state = {
    filterByString : "",
    filterByStock : false
  }

  productsFiltered = () => {
    return this.props.products.filter((p) => {
      if (!!this.state.filterByStock && !p.stocked) { return false }
      return p.name.toLowerCase().includes(this.state.filterByString.toLowerCase())
    })
  }

  onSearchBarUpdate = (type, value) => {
    if ( type === 'search' ) { this.setState({filterByString : value}) }
    if ( type === 'instock' ) { this.setState({filterByStock : value}) }
  }

  render() {
    return (
      <div className="product-table">
        <h1>Ironhack Store</h1>
        <SearchBar clbk={this.onSearchBarUpdate} />
        <ProductTable products={this.productsFiltered()} />
      </div>
    );
  }
}
