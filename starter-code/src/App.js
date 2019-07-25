import React, { Component } from 'react';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import data from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.dataArr = [...data.data];
    this.state = {
      data: this.dataArr,
      filteredData: this.dataArr,
    }
  }

  filterData(value, checkboxFiltered) {
    let filteredData = {checkboxFiltered};
    if (checkboxFiltered) {
      filteredData = this.state.data.filter(el => el.name.toLowerCase().includes(value.toLowerCase()) && el.stocked);
    } else {
      filteredData = this.state.data.filter(el => el.name.toLowerCase().includes(value.toLowerCase()));
    }
    this.setState({
      filteredData: filteredData,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>
        <FilterableProductTable data={this.state.filteredData} filterData={(value, checkboxFiltered) => this.filterData(value, checkboxFiltered)}/>
      </div>
    );
  }
}

export default App;
