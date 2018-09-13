import React from 'react';
import './App.css';
import Search from "./Search"
import Table from "./Table"

import data from "./data.json"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textsearch: "",
      checked: false,
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleSearch(e) {
    console.log(this.state.textsearch)
    this.setState({
      textsearch: e.target.value,
    })
  }

  handleCheckbox(e) {
    console.log(this.state.checked)
    this.setState({
      checked: e.target.checked,
    })
  }

  render() {
    
    let filterData = data.filter(product => product.name.toUpperCase().includes(this.state.textsearch.toUpperCase()) && (!this.state.checked || product.stocked))

    return (
      <div className="App">
        <Search textsearch={this.state.textsearch} handleSearch={this.handleSearch} handleCheckbox={this.handleCheckbox}/>
        <Table data={filterData}/>
      </div>
    );
  }
}

export default App;
