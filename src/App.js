import React, {Component} from 'react';
import {data} from './data.json';
import './App.css';
import ProductTable from './Components/ProductTable/ProductTable'
import SearchBar from './Components/SearchBar/SearchBar'
class App extends Component {
  state={
    allProducts : data,
    products:data,
    showProductsOnStock:false,
  }

  
  findProduct = productName=>{
    const showProducts = []
    for(let products of this.state.allProducts){
      if(products.name.toLowerCase().includes(productName.toLowerCase()))
      {
        if(this.state.showProductsOnStock && products.stocked)
          showProducts.push(products)
        else if(!this.state.showProductsOnStock)
          showProducts.push(products)
      }
    }
    this.setState({
      products:showProducts,
    })
  }
  
  showProductsOnStock = async productName =>{
    await this.setState({
      showProductsOnStock: !this.state.showProductsOnStock
    })
    this.findProduct(productName)
  }


  render(){
      return (
        <div className="App">
            <h1>IronStore</h1>
            <SearchBar findProduct={this.findProduct} showProductsOnStock={this.showProductsOnStock} />
            <ProductTable products ={this.state.products}/>
        </div>
      );
  }
}

export default App;
