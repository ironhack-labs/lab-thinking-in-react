import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "./data.json"
import IronStore from './components/ironStore';

// console.log(data)

export default class App extends Component {
  state = {
    goods: data.data,
    listToshow: [],
    query: ""
  }


  async componentDidMount() {
    await this.setState({
      listToshow: data.data
    })
  }

  checked = checked => {
    let itemsInStock;
    let { listToshow } = this.state
    if (checked) {
      itemsInStock = [...listToshow].filter(item => item.stocked)
    } else {
      itemsInStock = [...listToshow]
    }
    this.setState({
      goods: itemsInStock
    })
  }


  handleQuery = (query) => {
    let { listToshow } = this.state
    let filtered = [...listToshow]
      .filter(item => {
        return item.name.toLowerCase().includes(query.toLowerCase())
      })
    console.log(filtered)
    this.setState({
      query: query,
      goods: filtered
    })

  }




  render() {
    return (
      <div className="App">
        <IronStore
          goods={this.state.goods}
          query={this.state.query}
          handleQuery={this.handleQuery}
          checked={this.checked}
        />
      </div>
    );
  }
}
