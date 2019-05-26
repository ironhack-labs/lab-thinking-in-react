import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';


class App extends Component {
  // state = {
  //   products: data.products.data
  // }


  // handleSearch = (searchText) => {
  //   this.setState({
  //     searchText: products.filter
  //   })
  // }
  render() {
    return (
      <div className="App">
        <main className="container">
          <div> <FilterableProductTable data={data} />
            <div><SearchBar 
            // searchBarText={this.handleSearch}
            /></div>
            <div><ProductTable data={data.data}/></div>
          </div>
        </main> 
        
      </div>
   
    );
  }
}

export default App;
