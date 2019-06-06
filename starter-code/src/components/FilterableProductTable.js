import React, { Component } from 'react';
import Searchbar from './SearchBar'
import ProductTable from './ProductTable'

class FilterTable extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.data = props.products.data
    this.printProps(props.products.data)
  }
  printProps(arg) {
    console.log(arg)
  }

  render() {
    console.log()
    return (
        <div>
          <h1>IronStore</h1>
          <Searchbar />
          <ProductTable products={this.data}/>
        </div>
    );
  }
}

export default FilterTable
