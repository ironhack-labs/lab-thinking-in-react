import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable'
import data from './data.json'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       data: data.data,
       filteredData: data.data,
       instock: false
    }

    this.filterProduct = this.filterProduct.bind(this)
    this.instock = this.instock.bind(this)
  }

  filterProduct(searchLetters) {
    const filteredData = this.state.data.filter(data=> {
      return data.name.toLocaleLowerCase().includes(searchLetters.toLocaleLowerCase())
    })

    this.setState({
      filteredData: filteredData
    })
  }

  instock() {
    this.setState({
      instock: !this.state.instock
    }, () => {
      if (this.state.instock) {
        const filteredData = this.state.data.filter(data=> {
          return data.stocked
        })
        this.setState({
          filteredData: filteredData
        })
      } else {
        this.setState({
          filteredData: this.state.data
        })
      }
    })    
  }
  
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ this.state.filteredData } filter={this.filterProduct} instock={this.instock}/>
      </div>
    );
  }
}