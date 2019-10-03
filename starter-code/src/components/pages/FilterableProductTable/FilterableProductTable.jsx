import React, { Component } from 'react'
import SearchBar from '../../sections/SearchBar/SearchBar'
import ProductTable from '../../sections/ProductTable/ProductTable'

export default class FilterableProductTable extends Component {

  constructor(props) {
    super();

    this.state = {
      products: props.products
    }
  }

  searchProducts(search) {
    console.log(search);
  }

  render() {
    return (
      <div class="filterable-product-table">
        <h1>IronStore</h1>
        <SearchBar searchProducts={(search) => this.searchProducts(search)} />
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}
