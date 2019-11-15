import React, { Component } from 'react';
import { data } from './data.json';
import SearchBar from './components/SearchBar/SearchBar';
import ProductTable from './components/ProductTable/ProductTable';

export default class App extends Component {
  state = {
    data: data,
    dataFiltered: '',
    search: "",
  };
  
  filterOutofStock = (e) => {
    console.log(e.target.checked)
    // let dataCopy = [...this.state.data]
    let outStockProduct = this.state.data.filter(outStock => {
      return outStock.stocked === e.target.checked ? outStock.stocked === false : outStock
    })
    
    // return console.log(outStockProduct)
     this.setState({
       dataFiltered:outStockProduct
      })
  }
  searchProducts = (e) => {
    console.log(e.target.value)
    // const dataCopy = [...this.state.data]
    let searchedProducts = this.state.data.filter(theProducts => {
      return theProducts.name.toLowerCase().includes(e.target.value)
    })
    // return console.log(searchedProducts)
    this.setState({
      dataFiltered: searchedProducts,
    })
  }

  switchData() {
    if(this.state.dataFiltered===''){
      
      return this.state.data
    }else {
      return this.state.dataFiltered
    }
    
  }
  
  render() {
    return (
      <div className="App">
        <h1>Iron Store</h1>
        <SearchBar searchProducts={this.searchProducts} filterOutofStock={this.filterOutofStock}/>
        <ProductTable data={this.switchData()} />
      </div>
    );
  }
}
