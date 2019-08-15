import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import ProductRow from './components/ProductRow';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props){
    super(props)
  
  }
  render() {
    return (
      <div className="App">
       <FilterableProductTable store = { data } />
       <SearchBar />

       <div className="row">

   <div className="col-6">Name</div>
    <div className="col-6">Price</div>
</div >
      <ProductRow  />
     </div>
    );
  }
}

export default App;
