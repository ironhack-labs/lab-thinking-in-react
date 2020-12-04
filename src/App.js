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
    console.log(event);
    this.setState({
      search: event.target.value,
    });
  };

  filterProducts = () => {
    const filteredProducts = this.state.allProducts.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    return filteredProducts;
  };

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <Searchbar passedSearchValue={this.setSearch} />
        <Productable passedProducts={this.filterProducts()} />
      </div>
    );
  }
}

export default App;
