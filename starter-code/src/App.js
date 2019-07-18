import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import products from'./data.json'
import ProductTable from './ProductTable';

class App extends Component {
  constructor(){
    super()
  
    this.state = {
      products : [...products.data],
      filterQuery:"",
      filteredProducts : [...products.data]
    }
  }

  filterProducts(e){
    const filter = e.target.value
    let filteredProducts = this.state.products.filter((product)=>{
      return product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })
    this.setState({
      ...this.state,
      filterQuery : filter,
      filteredProducts : filteredProducts,
    })
  }

  checkStock(e){
    const filter = e.target.checked
    let newState={...this.state}
    let filteredStock 
    if(filter){
      filteredStock = this.state.filteredProducts.filter((product)=>{
        return product.stocked == true
      })
    }else {
      filteredStock = this.state.products
    }
    this.setState({
    ...this.state,
      filteredProducts : filteredStock,
    },
  
    () => {
      this.state.filteredProducts = [...newState.filteredProducts]
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="nav">
      <h1>IronStore</h1>
        </nav>

      <SearchBar
      checkStock={(e)=> this.checkStock(e)}
      filterProducts = {(e) =>this.filterProducts(e)}
      filterQuery={this.state.filterQuery}/>

      <ProductTable
      filteredProducts = {this.state.filteredProducts}
      />
      </div>
    );
  }
}

export default App;
