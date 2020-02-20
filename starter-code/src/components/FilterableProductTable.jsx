
import React, { Component } from 'react'
import SearchBar from "./SearchBar.jsx"
import ProductTable from "./ProductTable.jsx"
import { data } from '../data.json';


export default class FilterableProductTable extends Component {

  state = {
    productList: data,
    productSearch: ""
  };


  filterProducts = (e) => {
    console.log(e.target.value);
    this.setState({ productSearch: e.target.value })
  }


  render() {

    const products = this.state.productList.filter(product => {
      const v = this.state.productSearch;
      const exp = new RegExp(v, "i")
      const x = product.name.match(exp)
      return Boolean(x)
    })
    console.log(">>>", products);

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar updateState={this.filterProducts} />
        <ProductTable products={products} />
      </div>
    )
  }
}
