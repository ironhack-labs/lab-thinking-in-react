import React from 'react';
import './App.css';
import data from './data.json'
import SearchBar from './Components/SearchBar';
import ProductTable from './Components/ProductTable';

class App extends React.Component {

  state = {
    query: '',
    stock: false
  }

  setQuery = query => {
    this.setState({
      query: query
    })
  }

  filterStock = () => {
    this.setState((state) => ({
      stock: !state.stock
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar 
          query={this.state.query} 
          setQuery={this.setQuery} 
          filterStock={this.filterStock} 
          stock={this.state.stock}
          />
        <ProductTable 
          products={ data } 
          query={this.state.query}
          stock={this.state.stock}
          />
      </div>
    )
  }
}

export default App;
