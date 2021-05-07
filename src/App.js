import React from 'react';
import products from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


export default class App extends React.Component {



  render() {

    return (
      
    <div className="App">
      <FilterableProductTable 
      products={products.data}
      />
    </div>
      
    )
  }
}

