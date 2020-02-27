import React, { Component } from 'react';
import './App.css';

import List from './data.json';
import SearchBar from './searchBar/searchBar'
import ProductsGrid from './productsGrid/productsGrid'

export default class App extends Component {

  state = {

    products: List.data,

    allProducts: List.data,

    checked: false

  }

  componentDidMount() {

    console.log(this.state.products.data)
  }

  searchProduct(e) {

    let currentList = [];
    let newList = [];

    if (e.target.value !== "") {
      currentList = this.state.products;
      newList = currentList.filter(product => {
        const lc = product.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.allProducts;
    }
    console.log(newList);

    this.setState(
      { products: newList }
    );

  }

  searchStock() {

    let currentList = [];
    let newList = [];
    let copyOriginal = [...this.state.allProducts]


    if(this.state.checked !== true) {
      currentList = this.state.products;
      newList = currentList.filter(product => product.stocked === true)

    } else {

      newList = copyOriginal;
    }


    console.log(this.state.checked)
    console.log(newList)

    this.setState({
      ...this.state,
      products: newList,
      checked: !this.state.checked
    })
    
    

    
  }



  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>

        <SearchBar searchProduct={e => this.searchProduct(e)} stocked={e => this.searchStock(e)}></SearchBar>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>

              {this.state.products.map((product, idx) => (
                <ProductsGrid key={idx} name={product.name} price={product.price} stocked={product.stocked}></ProductsGrid>
              ))}

            </tbody>

          </table>
        </div>





      </div>
    );
  }
}
