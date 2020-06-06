import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';
import data from './data.json'
import FilterableProductTable from './Components/FilterableProductTable';

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
