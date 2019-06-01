import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import FilterableProductTable from './component/FilterableProductTable';
import data from './data.json'


class App extends Component {
  render() {
    return (
      <div className="App px-3">
        <FilterableProductTable products={ data } />
      </div>
    );
      }
    }
    
    export default App;
