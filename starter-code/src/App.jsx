import React, { Component } from 'react';
import FilterableProductTable from './components/FilterableProductTable';
import './App.css';
import data from './data.json';

class App extends Component {
  state = {
    product: data,
    query: '',
    Checked: false
  };

   //SetQueryBox opdaterer vores state for hvad vi indtaster i searchbox
  setQuery = query => {
    console.log(2);
    this.setState({
      query: query
    });
  };

  //SetQueryBox opdaterer vores state for checked om det er false eller true
  setQueryBox = queries => {
    console.log(2);
    this.setState({
      Checked: queries
    });
  };

  render() {
    console.log(3)
    return (
      <div className="App">
        <FilterableProductTable
          products={this.state.product}
          handleQuery={this.setQuery}
          query={this.state.query}
          handleQueries={this.setQueryBox}
          queries={this.state.Checked}
        />
      </div>
    );
  }
}

export default App;
