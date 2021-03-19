import React from 'react';
import jsondata from './data.json'
import './App.css';

import FilterableProductTable from './components/FilterableProductTable.js';
import SearchBar from  './components/SearchBar.js'

class App extends React.Component {
  state = {
    products: jsondata.data,
    stock: false,
  };

 
  searchBar = (e) => {
  
  let filteredCopy = jsondata.data.filter((eachProduct) => {
    return eachProduct.name
      .toLowerCase()
      .includes(e.toLowerCase());
  });
  this.setState({ products: filteredCopy });
};


onStock = () => {
  const stockChecked = !this.state.stock
  this.setState({
    stock: stockChecked
  })
  console.log(this.state.stock);
  let filteredCopy = jsondata.data.filter((eachProduct) => {
    return eachProduct.stocked;
  });

  this.setState({ products: filteredCopy });
};


render() {
  
  return (
    <div className="App">
    <h1>Iron Store</h1>
    <h4>Search</h4>
    <SearchBar  searchBar={this.searchBar} onStock={this.onStock} stocked={this.state.stock} />
          <FilterableProductTable products={ this.state.products } />
    </div>
  );
}
}

export default App;
