import React, { Component } from 'react';
import './App.css';
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

class FilterableProductTable extends Component {
  state = {
    products: this.props.products.data,
    filteredProducts: this.props.products.data,
    searchValue: "",
    inStock: false
  }

  searchChange = (e) => {
    this.setState(
      {searchValue: e.target.value}, () => {
        this.filteredSearch()
      }
    )
  }

  checkChange = () => {
    this.setState(
      {inStock: !this.state.inStock}, () => {
        this.showStocked()
      }
    )
  }

  showStocked = () => {
    const tempProducts = this.state.products
    const filteredTempProducts = tempProducts.filter((product)=>{
      if(this.state.inStock){
        return product.stocked
      } else return true
    })
  
    this.setState({
      filteredProducts: filteredTempProducts
    })
  }

  filteredSearch = () => {
    const tempProducts = this.state.products
    const filteredTempProducts = tempProducts.filter((product)=>{
      return product.name.includes(this.state.searchValue)
    })
    
    this.setState({
      filteredProducts: filteredTempProducts
    })
  }

  render() {
    return (
      <div className="container">
        <SearchBar 
          products={this.state.products} 
          searchValue={this.state.searchValue} 
          searchChange={this.searchChange}
          checkChange={this.checkChange}/>
        <ProductTable products={this.state.filteredProducts}/>
      </div>
    );
  }
}

export default FilterableProductTable;