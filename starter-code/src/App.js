import React, { Component } from 'react';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable';
import './App.css'



class App extends Component {

state = {
  data:data
}

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
  
      <FilterableProductTable {...this.state.data}/>
  
       
      </div>
    );
  }
}

export default App;

