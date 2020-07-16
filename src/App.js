import React from 'react';
import './App.css';
import data from './data.json'
import SearchBar from './Components/SearchBar';
import ProductTable from './Components/ProductTable';
// import ProductRow from './Components/ProductRow';

class App extends React.Component {

  state = {
    query: ''
  }

  setQuery = query => {
    this.setState({
      query: query
    })
  }

  render() {
    // console.log('from app.js: ',this.state.query)
    return (
      <div className="App">
        <SearchBar query={this.state.query} setQuery={this.setQuery}/>
        <ProductTable products={ data } query={this.state.query}/>
      </div>
    )
  }
}

export default App;
