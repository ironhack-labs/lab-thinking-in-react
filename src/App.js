import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './Components/SearchBar.jsx';
import ProductTable from './Components/ProductTable.jsx';
import productData from './data.json';
export class App extends Component {
  state = {
    products: { ...productData }.data,
    inStock: null,
    searchedProd: '',
  };

  handleSearch = (event) => {
    if (event.target.type === 'checkbox') {
      if (event.target.checked)
        this.setState({ inStock: true }, console.log('IN STOCK CHECKED '));
      else this.setState({ inStock: false });
    } else {
      // in case event.target.type = text input
      this.setState(
        {
          searchedProd: event.target.value.toLowerCase(),
        },
        console.log('INPUT TYPED : ', this.searchedProd)
      );
    }
  };

  render() {
    const { products, inStock, searchedProd } = this.state;
    console.log('IN STOCK PRODUCTS ONLY ? ', inStock);

    const filteredProds = products
      .filter((prod) => {
        if (inStock) return prod.stocked === inStock;
        else return true;
      })
      .filter((prod) => prod.name.toLowerCase().includes(searchedProd));
    console.log('FILTERED PRODS', filteredProds);

    return (
      <div className="App FilterableProductTable">
        <header className="App-header flex">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">IronStore</h2>
        </header>
        <SearchBar callback={this.handleSearch} />
        <ProductTable products={filteredProds} />
      </div>
    );
  }
}

export default App;
