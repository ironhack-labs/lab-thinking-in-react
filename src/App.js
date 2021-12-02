import './App.css';
import React, { Component } from 'react';
import ProductTable from './components/ProductTable';
import SearchBar from './components/SearchBar';
import datajson from './data.json'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      productsArray: datajson.data
    }
  }

  filterSearch = (searchProduct) => {

    console.log(searchProduct)

    const newArrayProduct = datajson.data.filter((elm) => searchProduct === elm.name.substring(0, searchProduct.length))

    console.log(newArrayProduct)

    this.setState({
      productsArray: newArrayProduct
    })
  }

  render() {
    return (
      <div className="App">

        <h1>IronStore</h1>
        <div>
          <SearchBar filterSearch={this.filterSearch} />
        </div>
        <div>
          <ProductTable products={this.state.productsArray} />
        </div>
      </div>);
  }
}
