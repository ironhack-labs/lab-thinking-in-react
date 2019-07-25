import React, { Component } from 'react';
import { data } from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      filter: false,
      filteredData: [],
      listOfItens: data,
      outOfStock: false,
      outOfStockList: [],
    }

    this.searchHandler = this.searchHandler.bind(this)
    this.checkBoxHandler = this.checkBoxHandler.bind(this)
  }

  searchHandler(event) {
    if (event.target.value !== '') {
      this.setState({
        filter: true,
        search: event.target.value,
      })
    } else {
      this.setState({
        filter: false,
        search: event.target.value,
      })
    }

    let allProducts = [...this.state.listOfItens];

    if (this.state.outOfStock === false) {
      allProducts = [...this.state.listOfItens]
    } else {
      allProducts = [...this.state.outOfStockList]
    }

    let search = this.state.search.toUpperCase()

    const filteredProducts = allProducts.filter((item) => {
      return item.name.toUpperCase().includes(search)
    });


    this.setState({
      filteredData: filteredProducts,
    })
  }

  checkBoxHandler(event) {
    this.setState({
      outOfStock: !this.state.outOfStock,
    })

    const allProducts = [...this.state.listOfItens]
    let outOfStock;

    if (this.state.outOfStock === false) {
      outOfStock = allProducts.filter(item => item.stocked === true)
    } else {
      outOfStock = allProducts
    }
    this.setState({
      outOfStockList: outOfStock
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Products</h1>
        <FilterableProductTable

          products={this.state.outOfStock ? this.state.outOfStockList : this.state.listOfItens}
          state={this.state}
          search={this.searchHandler}
          filteredArr={this.state.filteredData}
          checkboxHandler={this.checkBoxHandler}
        />
      </div>
    );
  }
}

export default App;


