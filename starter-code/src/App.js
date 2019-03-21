import React, { Component } from 'react';
import data from './data.json'
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';


class App extends Component {

  constructor(){
      super()
      this.state = {data}
  }


  render() {
    return (
    
      <div className="App">
    
        <FilterableProductTable products={ this.state.data } />
      </div>
    )
  }
}

export default App;

