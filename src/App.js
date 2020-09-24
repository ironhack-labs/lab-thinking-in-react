import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { data } from './data.json'
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable'

class App extends Component {
  state = {
    data: data,
    query: '',
    tickQuery: false
  };
  setQuery = query => {
    this.setState({
      query: query
    });
  };
  setTickQuery = () => {
    // console.log("val", tickQuery)
    this.setState({
      tickQuery: this.state.tickQuery
    })
    console.log("tickQuery", this.state.tickQuery)
  }
  render() {
    console.log("inside", this.state.tickQuery)
    return (
      <div className="App">
        {/* {console.log(this.state.data)} */}
        <FilterableProductTable
          products={this.state.data}
          setQuery={this.setQuery}
          query={this.state.query}
          tick={this.state.tick}
          tickQuery={this.state.tickQuery}
          setTickQuery={this.setTickQuery} />
      </div>
    );
  }
}

export default App;
