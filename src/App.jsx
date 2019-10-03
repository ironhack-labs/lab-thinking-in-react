import React, { Component } from 'react';
import logo from './logo.svg';
import FilterableProductTable from "./FilterableProductTable"
import { data } from './data.json'
import './App.css';

export default class App extends Component {
  state = {
    products: data,
    filteredProds: data,
    checked: false
  }




  handleSearch = (e) => {
      console.log(e.target.value)
    if (e.target.checked === true) {
      console.log('true')
      let filtered = this.state.products.filter((product, i) => {
        if ((product.name.toLowerCase().includes(e.target.value.toLowerCase()) || product.category.toLowerCase().includes(e.target.value.toLowerCase())) && product.stocked === true) {
          return product
        }
      })
  
      this.setState({
        filteredProds: filtered,
        checked: e.target.checked
      })
    }
    else {
        console.log('else')
            //// ORIGINAL
            let filtered = this.state.products.filter((product, i) => {
              if (product.name.toLowerCase().includes(e.target.value.toLowerCase()) || product.category.toLowerCase().includes(e.target.value.toLowerCase())) {
                return product
              }
            })
        
            this.setState({
              filteredProds: filtered
            })
    }


  } 


  handleCheckbox = (e) => {
    if (e.target.checked === true) {

      let filtered = this.state.filteredProds.filter((product, i) => {
        return (product.stocked === true)
      })

      this.setState({
        filteredProds: filtered,
        checked: e.target.checked
      })
    }
    if (e.target.checked === false) {
      this.setState({
        filteredProds: this.state.products,
        checked: e.target.checked
      })
    }
  }





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronStore {this.state.number}</h1>
        </header>
        <FilterableProductTable products={this.state.filteredProds} handleSearch={this.handleSearch} handleCheckbox={this.handleCheckbox}/>
      </div>
    );
  }
}
