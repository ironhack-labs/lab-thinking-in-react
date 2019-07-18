import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data.json'
import ProductTable from './components/ProductTable';
import Searchbar from './components/SearchBar';

class App extends Component {
  constructor(){
    super()

    this.state = {
      filterQuery: "",
      data : [...data],
      filteredProducts: [...data]
    }
  }
  filterProducts(e) {
    const filter = e.target.value
    let filteredProducts = this.state.data.filter((dat) => {
      return dat.name.toLowerCase().indexOf(filter.toLowerCase()) > -1
    })

    this.setState({
      ...this.state,
      filterQuery: filter,
      filteredProducts: filteredProducts
    })
  }
  filterStock(e) {
    let filteredStock 
    const filter = e.target.checked
    let newState = {...this.state}
    if(filter){
      filteredStock = this.state.filteredProducts.filter((dat) => {
        return dat.stocked == true
      })
    }else {
      filteredStock = this.state.filteredProducts

    }
    
    
    this.setState({
      ...this.state,
      
      filteredProducts: filteredStock
    },
    () => {
      this.state.filteredProducts = [...newState.filteredProducts];
    }
    )
  }
  render() {
    return (
      <React.Fragment>
        <div className="index">
          <h1>IronStore</h1>
        <Searchbar
          filterProducts={(e) => this.filterProducts(e)}
          filterStock={(e) => this.filterStock(e)}
          filterQuery={this.state.filterQuery} />
        <ProductTable filteredProducts = {this.state.filteredProducts}  />
      
        </div>
      </React.Fragment>
    );
  }
}

export default App;
