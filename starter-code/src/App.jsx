import React, { Component } from 'react';
import dataJson from './data.json'
import FilterableProductTable from './Components/FilterableProductTable';
import './App.css';

//dataJson is an object of arrays of object 
const dataList = dataJson.data

class App extends Component {
  state = {
    searchTerm: "",
    onlyStocked: false
  };


  //function receives event as a parameter from input onChange
  handleSearchTermChange = event => {
    this.setState({ 
      searchTerm: event.target.value
    })
  }

  handleStocksChange = event => {
    this.setState({ 
      onlyStocked: event.target.checked
    })
  }

  //dataList is outside of class component so it doens't need this.
  filterProducts = () => {
    const productsCopy = dataList.map(product => product)
    const filteredProducts = productsCopy.filter((product) => {
      let productInStock = product.stocked;
      if (this.state.onlyStocked) {
        return productInStock 
      } else {
        return true
      }
    }).filter((product) => {
      let productName = product.name.toLowerCase();
      
      return productName.includes(this.state.searchTerm.toLowerCase()) 
      }
    );
    return filteredProducts;
  }

  render() {
    const filteredProducts = this.filterProducts();

    return (
      <div >
        <header >
          <h1 >Thinking in React</h1>
          {/* props (products, onSearch) are the parameters we name on our own */}
          <FilterableProductTable 
          products={ filteredProducts } 
          onSearch={ this.handleSearchTermChange }
          searchTerm={this.state.searchTerm}
          onCheckBoxChange={ this.handleStocksChange }
          inStock={this.state.onlyStocked}
           />
        </header>
      </div>
    );
  }
}

export default App;