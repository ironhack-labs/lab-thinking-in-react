import React, { Component } from 'react';
import data from './data.json'
import './App.css';

import FilterableProduct from './FilterableProduct';
import SearchBar from './SearchBar'


class App extends Component{

  state = {
    query: "",
    stocked: false
  }

  setQuery = (name,value) => {
    console.log(name, value, "HERE")
    this.setState({
      [name]: value
    })

  }



  render(){
    console.log(this.state)
    const filteredata = data.data.filter(product => 
      product.name.toLowerCase().includes(this.state.query.toLowerCase()) && (product.stocked === this.state.stocked || !this.state.stocked)
    )

  return (

  
    <div className="App">
    <SearchBar state={this.state} setQuery={this.setQuery}/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        <FilterableProduct products={filteredata} query={this.state.query}/>
        </tbody>
      </table>
      
    </div>
  );
  }
}

export default App;
