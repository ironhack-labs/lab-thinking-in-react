import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dataJson from './data.json'
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      originalData: []
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
    this.setState({ ...this.state, data: newJson,originalData: newJson });
  
  }
  onSearch = (e) => {
    var filter;
    var filter2=[];
    this.state.data=this.state.originalData;
    Object.values(this.state.data).forEach(item => {
       filter=item.filter(myobejct => {
        return myobejct.name.includes(e.target.value)
      })
      filter2.push(filter)
    });
    this.setState({ ...this.state, data: filter2 })

  }
  onCheck = (e) => {

  }
  render() {
    return (
      <div className="App">
        <FilterableProductTable onSearch={this.onSearch} onCheck={this.onCheck} jsonData={this.state.data} />
      </div>
    );
  }
}

export default App;
