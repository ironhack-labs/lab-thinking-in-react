import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import ProductList from './ProductList'
import ProductRow from './ProductRow'

class App extends Component {

constructor(props) {
  super(props) 
  this.state = {
    data: data,
    ProductList: ProductList,
    ProductRow: ProductRow,

  }
  
}


  render() {
    return (
      <div className="App">

      <ProductList/>
    
      </div>
    );
  }
}

export default App;
