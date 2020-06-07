import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './Components/FilterableProductTable';
import 'bulma/css/bulma.css';

class App extends Component {
  
  render() {
    return (

      <div className="App">
        <FilterableProductTable products={data}></FilterableProductTable>
      </div>
    )

  }
}


export default App;
