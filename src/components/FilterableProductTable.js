import React, { Component } from 'react'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


export default class FilterableProductTable extends Component {

    state = {
        search: '',
        inStock: true
      }
      
    search = searchValue => {
        this.setState({
          search: searchValue
        })
    }

    checkInStock = inStockValue => {
        this.setState({
            inStock: inStockValue
        })
    }

    render() {
        console.log(this.state.search)
        return (
            <div>
                <SearchBar 
                search={this.state.search}
                searchValue={this.search}
                inStockValue={this.checkInStock}
                />
                
                <ProductTable 
                products={this.props.products}
                search={this.state.search}
                inStock={this.state.inStock}
                />
                
            </div>
        )
    }
   
}
