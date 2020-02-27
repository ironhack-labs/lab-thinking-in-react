import React, { Component } from 'react';
import './App.css';
import data from './data.json'
import Table from './Components/ProductTable'
import Search from './Components/SearchBar'

class App extends Component {
  constructor(){
    super()
    this.state= {
      filter: {search: "", tick: false},
      data
    }
  }

search = youSearch =>{
  console.log(youSearch)
this.setState({filter: youSearch})
}

  render() {
    
    let filterProduct = this.state.data.data.filter(elm => elm.name.includes(this.state.filter.search))
    this.state.filter.tick && (filterProduct = filterProduct.filter(elm => elm.stocked))



    return (
      <div className="App">
        <h1>IronStore</h1>
        <Search search={this.search}/>
        <Table data={[...filterProduct]} />
      </div>
    )
  }
}


export default App