// import React from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import React, { Component } from 'react'


export default class App extends Component {

  state = {
    productsData: data.data
  }

  render() {
    return (
        <div className="App">
        <FilterableProductTable products={ this.state.productsData } />
        </div>
    )
  }
}


// function App() {
//   return (
    
//   );
// }

// export default App;

