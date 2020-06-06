import React from 'react';

import dataImport from '../data.json'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'


class FilterableProduct extends React.Component {
    state = {
     productData: dataImport,
     searchTerm: "",
     filterInStock: false
    }

searchHandler = (searchTerm) => {
    this.setState({
    searchTerm: searchTerm // "L" -> "La" 
        })
      }

      stockHandler = (stock) => {
        this.setState({
            filterInStock: stock
        })
    }

render() {

let filteredProducts = this.state.productData.data.filter((product) => product.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

if (this.state.filterInStock===true) {
    filteredProducts = filteredProducts.filter((product) =>product.stocked )
}



    return(
        <div>
    <div>
    <SearchBar onSearchCallback={this.searchHandler} onStockCallback={this.stockHandler} currentSearchTerm={this.state.searchTerm} stockFilter={this.state.filterInStock}></SearchBar>
    </div>
      <ProductTable displayData={filteredProducts}></ProductTable>
        </div>
    )
}
}


export default FilterableProduct