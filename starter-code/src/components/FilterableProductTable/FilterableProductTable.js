import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable.js'


export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.props=props
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <ProductTable Products={this.props.Products}/>
      </div>
    )
  }
}
