import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable.js'


export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.props=props

    this.state = {
      products: this.props.products.data
    }
  }

  searchProduct = (name,state) => {
    const filterRegex = new RegExp(`(${name})+`, 'i');
    const filteredProduct = [...this.props.products.data].filter(({name}) => name.match(filterRegex));   
    this.setState({...this.state, products:filteredProduct}, () => console.log(this.state))    
}



  render() {

    return (
      <div>
        <SearchBar searchProduct={this.searchProduct}/>
        <ProductTable products={this.state.products}/>
      </div>
    )
  }
}
