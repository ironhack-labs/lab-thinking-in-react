import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json'
import './App.css';
import Table from './components/Table';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="container">
          <div className="row espacio-top">
            <div className="col-12">
                <h3>IronStore</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
               
                <FilterableProductTable allProducts = {data}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
