import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import FilterableProductTable from './components/FilterableProductTable'

class App extends Component {
  state ={
    products:[]
  }

  componentWillMount(){
    this.setState({products: data})
  }

  render() {
    let {products} = this.state
    return (
      <div className="App">
        <FilterableProductTable products={products.data}/>
      </div>
    );
  }
}

export default App;
