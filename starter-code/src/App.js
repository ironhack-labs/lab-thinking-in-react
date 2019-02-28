import React, { Component } from 'react';
import logo from './logo.svg';
import FilterableProductTable from "../src/Components/FilterableProductTable"
import Data from "./data"
import './App.css';

class App extends Component {
  state={
    products:Array
  }

  componentDidMount(){
    this.state({products:Data.data})
  }

  onChangeSearh = event => {
    let search = event.target.value.toLowerCase()
    if(search === "") {
      return this.setState ({products:Data.data})
    }
    let array = this.state.products.filter (product => 
      product.name.toLowerCase().includes(search)
    )

    this.setState ({products:array})

  }


  onChangeStock = event => {
    let {products} = this.state
    if (event.target.checked) {
      products = products.filter (product => product.stocked === true)
      this.setState({products:products})
    } else {
      this.setState({products:Data.data})
    }
  }


  render() {
    let {products} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FilterableProductTable
          products = {products}
          onChangeSearch = {this.onChangeSearh}
          onChangeStock = {this.onChangeStock}
        />
      </div>
    );
  }
}

export default App;
