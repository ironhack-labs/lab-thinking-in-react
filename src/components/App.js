import './App.css'
import React, { Component } from 'react'
import { data as DataList } from '../data.json'
import ProductTable from './product-table/ProductTable'
import SearchBar from './search-bar/SearchBar'

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: DataList
    }
  }

  filterData = value => {
    const newData = DataList.filter(elm => elm.name.includes(value))
    this.setState({ data: newData })
  }

  render() {
    return (
      <section className='container text-center'>
        <h1>IronStore</h1>
  
        <hr />
  
        <SearchBar filterProduct={this.filterData} />
  
        <ProductTable products={this.state.data} />
      </section>
    )
  }
}

export default App
