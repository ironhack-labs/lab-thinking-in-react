import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import data from '../data.json'

class FilterableProductTable extends Component {
    constructor(props){
        super(props)
  
        this.state = { 
          products: data,
          searchString: ''
        }
    }

    searchProduct = theSearch => {
        this.setState({
          searchString: theSearch
        })
      }

    render(){

    let productList = this.state.products.data

    console.log(productList)

    if(this.state.searchString){
        productList = productList.filter(element => element.name.toUpperCase().includes(this.state.searchString.toUpperCase()))
    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar searchProduct={this.searchProduct}/>
            <ProductTable products={productList}/>
        </div>
    )
    }
}
    
export default FilterableProductTable