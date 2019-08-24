import React, { Component } from 'react';

import FilterableProductTable from './Components/FilterableProductTable';
import './App.css';
import {LeProvedore} from './Components/dataContext'


class App extends Component {
  render() {
    return (
      <LeProvedore>
        <div className="App">
          <FilterableProductTable/> 
        </div>  
      </LeProvedore>
    );
  }
}

export default App;
