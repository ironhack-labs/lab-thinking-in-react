import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dataJson from './data.json'
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount = () => {
    let newJson = {
    }

    dataJson.data.forEach((item, index) => {

      if (!Object.keys(newJson).includes(item.category)) {
        newJson[item.category] = [item];
      } else {
        newJson[item.category].push(item)
      }

    })
    this.setState({ ...this.state, data: newJson });
  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable jsonData={this.state.data} />
      </div>
    );
  }
}

export default App;
