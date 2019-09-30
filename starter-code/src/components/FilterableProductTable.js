import React, { Component } from 'react'
import ProductTable from '../components/ProductTable.js'
import SearchBar from '../components/SearchBar.js'

export default class FilterableProductTable extends Component {


  render() {
    return (
      <div style={style} >
        <h1>IronStore</h1>
      <SearchBar filter={this.props.filter}/>
      <ProductTable products={this.props.products}/>
      </div>
    )
  }
}


const style = {
  padding: '10px',
  
}