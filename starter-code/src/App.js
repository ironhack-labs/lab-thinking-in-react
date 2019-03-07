import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      products: data.data,
      filteredProducts: data.data
    }
  }

  filterUpdate = (filteredProducts) => {
    this.setState({
      filteredProducts
    });
  }

  render() {
    console.log(data.data);
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar {...this.state} filterUpdate={this.filterUpdate}/>
        <ProductTable filteredProducts={this.state.filteredProducts}/>
      </div>
    );
  }
}

export default App;
