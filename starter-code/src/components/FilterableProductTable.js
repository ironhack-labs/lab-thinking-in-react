import React, { Component } from 'react';
import data from '../data.json'
import SearchBar from '../components/SearchBar'
import ProductTable from '../components/ProductTable'



class FilterableProductTable extends Component {

  constructor (){
    super()
    this.state = {
      products: data.data,
      productscopy: data.data
    }
  }


  searchForProduct = productName => {
    let productsCopy = [...this.state.productscopy]
    
    productsCopy = productsCopy.filter(product => {
      return product.name.toLowerCase().includes(productName.toLowerCase())
    })

    this.setState({
      products:productsCopy
    })

  }


  render() {
    console.log(this.state.products)
    return (
      <div className="table-container">


        <SearchBar searchForProduct={this.searchForProduct} />

        <ProductTable products={this.state.products}/>
      
      </div>
    );
  }
}

export default FilterableProductTable;