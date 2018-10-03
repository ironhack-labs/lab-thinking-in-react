import React, { Component } from 'react';
import logo from './logo.svg';
import _ from 'lodash';
import './App.css';
import data from "./data.json";
import SearchBar from './Components/SearchBar';
import ProductCategoryRow from './Components/ProductCategoryRow'

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data,
      filter: "",
      productsFiltered: []
    }
  }

  filterProducts = (string) => {
    this.setState({ filter: string })
    let productsFiltered = this.state.productsFiltered;
    let products = this.state.products;
    productsFiltered = products.filter(product => product.includes(this.state.filter))
    this.setState({ productsFiltered: productsFiltered })
  }

  orderProducts = (data) => {
    return _.groupBy([data], data.category)
  }



  render() {
    return (
      <div className="App">
        <SearchBar stringForFilter={string => this.filterProducts(string)} />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <ProductCategoryRow text="Sporting Goods"/>
                <div>
                </div>
              <ProductCategoryRow text="Electronics"/>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}

export default App;
