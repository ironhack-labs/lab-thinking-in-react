import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'
import jsondata from './data.json'


class App extends Component {
  constructor() {
    super()
      
    this.state = {
      products: jsondata.data 
    }


  }
  

  filterProducts = (text) => {
    const newArr = jsondata.data.filter((prd) => {
      return prd.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    })

    this.setState({
      products: newArr
    })
  
  }

  render() {
    return (
      <div className="App">
        <SearchBar filterProducts={this.filterProducts}/>
        <ProductTable products={ this.state.products } />
      </div>
    );
  }
  
}

export default App;
