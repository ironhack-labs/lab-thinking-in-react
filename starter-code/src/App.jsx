import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { data } from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    products: data,
    filteredProducts: data,
    checked: false
  };

  handleSearch = e => {
    console.log(e, e.target, e.target.value);
    let filtered = this.state.products.filter((product, i) => {
      if (
        product.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        product.category.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return product;
      }
    });
    this.setState({
      filteredProducts: filtered
    });
  };

  handleCheckbox = e => {
    console.log(e, e.target, e.target.checked);
    if (e.target.checked === true) {
      let filtered = this.state.filteredProducts.filter((product,i)=>{
        return (product.stocked === true)
      })
      this.setState({
        filteredProducts:filtered,
        checked:e.target.checked
      })
    } if (e.target.checked === false) {
      this.setState({
        filteredProducts:this.state.products,
        checked:e.target.checked
      })
      }
  };

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="title">IronStore</h1>
        </div>
        <FilterableProductTable
          products={this.state.filteredProducts}
          handleSearch={this.handleSearch}
          handleCheckbox={this.handleCheckbox}
        />
      </div>
    );
  }
}
