import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';

export default class App extends Component {
  state = {
    query: '',
    clicked: false,
  };

  render() {
    const setQuery = (query) => {
      this.setState({
        query: query,
      });
    };

    const setClick = (query) => {
      this.setState({
        clicked: !this.state.clicked,
      });
    };
    //console.log(this.state.clicked);
    return (
      <div>
        <FilterableProductTable
          products={data.data}
          query={this.state.query}
          triggerSetQuery={setQuery}
          click={setClick}
          clicked={this.state.clicked}
        />
      </div>
    );
  }
}
