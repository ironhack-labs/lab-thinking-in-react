import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable ';




class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
     products: data,
     filterProducts: data
  }
}

search = val => {
  let filter = this.products.filter((product) => {
    return product.name.toLowerCase().includes(val)
  });
  this.setState({ filterProducts: filter })
}



  render() {
   let products = this.state.products;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
       <div>
        <FilterableProductTable products={products}/>
       </div>
      </div>
    );
  }
}

export default App;
