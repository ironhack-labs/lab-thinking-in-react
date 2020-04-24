import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ProductTable from './components/ProductTable';
import data from './data.json';


class App extends Component {
  state =  {
    search: '',
    data = []
  }

  componentDidMount() {
    this.setState({data:data})
  }

handleChange= (e) => {
  console.log("el evento e", e.target.value)
   let {value} = e.target
   let {search} = this.state
   search = value
 }

  render() {
    let {handleChange} = this
    return (
      <div className="App">
      <h1>IronStore</h1>
        <SearchBar handleChange= {handleChange}/>
        <ProductTable data= {this.state.data}/>
      </div>
    );
  }
}

export default App;
