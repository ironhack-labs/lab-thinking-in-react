import React, { Component } from 'react'
import ProductTable from './ProductTable'

class FilterableProductTable extends Component {

    handleSearch = (query) => {
     const value = query
     const searchArray = this.productList.filter(product => product.name.includes(value))
    }
    

render() {

    return (
        <div>
      
        <ProductTable products={this.props.products}/>
      </div>
    );
  }
}

export default FilterableProductTable

