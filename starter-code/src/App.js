import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import ProductTable from './components/ProductTable'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      onStock: false
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleStockChange = this.handleStockChange.bind(this)
    }

  handleSearchChange(searchString) {
    this.setState({
      search: searchString
    })
  }

  handleStockChange(checked) {
    checked ? this.setState({onStock: true}) : this.setState({onStock: false})
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <Search 
        value={this.state.search}
        onSearchChange={this.handleSearchChange}
        onStockChange={this.handleStockChange} />
        <ProductTable searchString={this.state.search} stockSearch={this.state.onStock}/>
      </div>
    );
  }
}

export default App;
