import React, { Component } from 'react'
import SearchBar from './SearchBar/SearchBar'
import ProductTable from './ProductTable/ProducTable'
import products from '../../data.json'

export default class FilterableProductTable extends Component {

  constructor() {
    super();
    this.state = {
      products: products.data,
      search: new RegExp("", "gi"),
      filterByStock: false
    }
  }


  searchFunction = function (e) {
    let regx = (new RegExp(e.target.value, "gi"));
    this.setState({ ...this.state, search: regx }, () => {
      this.filterProducts();
    });
  }.bind(this)


  stockFunction = function (e) {
    let checked = e.target.checked;
    this.setState({ ...this.state, filterByStock: checked }, () => {
      this.filterProducts();
    });
  }.bind(this)


  filterProducts = function () {
    let productsCopy = products.data.filter(product => {
      return product.name.match(this.state.search);
    })

    if (this.state.filterByStock) {
      productsCopy = productsCopy.filter(product => {
        return (product.stocked);
      })
    }
    this.setState({ ...this.state, products: productsCopy }
    );
  }.bind(this);

  render() {
    return (
      <div>
        <SearchBar searchFunction={this.searchFunction} stockFunction={this.stockFunction} />
        <ProductTable products={this.state.products} />
      </div>
    )
  }
}
