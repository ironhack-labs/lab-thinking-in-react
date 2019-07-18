import React, { Component } from 'react';
import './App.css';
import Search from './Search'
import TableProducts from './TableProducts';
import productsData from './data.json';

class App extends Component {
  constructor(){
    super();
    this.prodCopy = [...productsData.data];
    this.stockQuery = false;
    this.state = {
      prod : [...this.prodCopy],
      filterQuery: "",
      products: [],
      filteredProducts: [...productsData.data],
    }
  }
  
checkVerified(e){
  let state = e.target.checked;
  let filteredProductsStock;
  let newState = {...this.state};
  if(state){
    filteredProductsStock = this.state.filteredProducts.filter((product) => {
      return product.stocked == true;
    })
  }
  else{
    filteredProductsStock = this.state.filteredProducts;
  }
  this.setState({
    ...this.state,
    filteredProducts: filteredProductsStock,
  },
  () => {
    this.state.filteredProducts = [...newState.filteredProducts]
  })
}

filterProducts(e) {
  const filter = e.target.value
  let filteredProducts = this.state.prod.filter((product) => {
    return product.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
  })

  this.setState({
    ...this.state,
    filterQuery: filter,
    filteredProducts: filteredProducts,
  })
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IronStore</h1>
        </header>
        <Search filterProducts={(e) => this.filterProducts(e)} checkVerified={(e) => this.checkVerified(e)} filterQuery={this.state.filterQuery} />
        <TableProducts filteredProducts={this.state.filteredProducts}></TableProducts>
      </div>
    );
  }
}

export default App;