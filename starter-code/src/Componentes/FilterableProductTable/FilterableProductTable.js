import React, { Component } from 'react'
import Searchbar from '../Searchbar/Searchbar';
import ProductTable from '../ProductTable/ProductTable';

export default class FilterableProductTable extends Component {
  state = {
    products: this.props.products
  }


  render() {
    return (
      <div>
        <Searchbar></Searchbar>
        <ProductTable
          products={this.state.products}


        // name={this.props.products.name}
        // price={this.props.products.price}
        // category={this.props.products.category}
        />
      </div>
    )
  }
}
