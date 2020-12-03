import React from 'react';
import './App.css';
import Searchbar from '../src/components/Searchbar';
import Productable from '../src/components/Productable';
import Productrow from '../src/components/Productrow';
import products from './data.json';

class App extends React.Component {
  state = {
    allProducts: products.data,
    search: '',
    name: '',
    price: '',
    stocked: false,
  };

  setSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  };

  filteredProduct = () => {
    const filteredProducts = this.state.allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        product.price.toLowerCase().includes(this.state.search.toLowerCase())
      );
    });
    this.setState({
      allProducts: filteredProducts,
    });
  };

  render() {
    // console.log(this.state.search);
    return (
      <div className="App">
        <h1>IronStore</h1>
        <Searchbar setSearch={this.setSearch}></Searchbar>
        <Productable filteredProduct={this.filteredProduct}></Productable>
      </div>
    );
  }
}

export default App;
