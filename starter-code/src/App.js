import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table'



class App extends Component {
  constructor(){
    super()
    // this.state={
    //   products: filterReduce,
    //   category: filterReduce.category
    // }
  }



  render() {
    return (
      <div className="App">
       <Table />
      </div>
    );
  }
}

export default App;
