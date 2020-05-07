import React, { Component } from 'react';
import dataJson from './data.json'
import FilterableProductTable from './Components/FilterableProductTable';
import './App.css';

//dataJson is an object of arrays of object 
const dataList = dataJson.data

class App extends Component {
  state = {
    productsList: dataList,
  };

  // handleNameChange = event => {
  //   this.setState({ 
  //     name: event.target.value
  //   })
  // }

  //function receives event as a parameter from input onChange
  //dataList is outside of class component so it doens't need this.
  filterNames = (event) => {
    const productsCopy = dataList.map(product => product)
    const filteredNames = productsCopy.filter((product) => {
      let productName = product.name.toLowerCase();
      
      return productName.includes(event.target.value.toLowerCase()) 
    })
    this.setState({
      productsList: filteredNames
    })
  }

  filterStocks = (event) => {
    const productsCopy = dataList.map(product => product)
    const filteredStocks = productsCopy.filter((product) => {
      let productInStock = product.stocked;
      
      if (event.target.checked) {
        return productInStock 
      } else {
        return true
      }
      
    })
    this.setState({
      productsList: filteredStocks
    })
  }

  render() {
    return (
      <div >
        <header >
          <h1 >Thinking in React</h1>
          {/* props (products, onSearch) are the parameters we name on our own */}
          <FilterableProductTable 
          products={ this.state.productsList } 
          onSearch={ this.filterNames }
          checkBox={ this.filterStocks }
           />
        </header>
      </div>
    );
  }
}

export default App;