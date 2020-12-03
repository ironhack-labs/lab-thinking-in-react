import './App.css';
import database from './data.json'
import React, { Component } from 'react'

import ProductTable from './children/ProductTable'
import SearchBar from './children/SearchBar'

class App extends Component {

  constructor() {
    super()
    this.state = {
      products: database.data,
      filteredProds: database.data
    }
  }

  searchFor = search => {
    const filterProds = this.state.products.filter(elm => elm.name.toLowerCase().includes(search.toLowerCase()))
    this.setState({ filteredProds: filterProds }, () => console.log(this.state.filteredProds))
    
  }

  render() {
    return (
    <main>
        <h1>IronStore</h1>
        <SearchBar searchFor={value => this.searchFor(value)} />
        <ProductTable products={this.state.filteredProds} />
    </main>
  )
  }
}



export default App;
