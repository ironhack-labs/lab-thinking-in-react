import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabla from './Tabla';
import data from './data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      items: data.data,
      itemsshown: data.data,
      includeoutofstock: true
    };
  }
  render() {
    return (
      <div className="App">
        <input onChange={this.handleInput} type="text" />
        <Tabla
          items={this.state.items}
          itemsshown={this.state.itemsshown}
        ></Tabla>
      </div>
    );
  }

  handleInput = input => {
    console.log(input.target.value);
    let templist = this.state.items.filter(item =>
      item.name.toLowerCase().includes(input.target.value.toLowerCase())
    );
    this.setState({ itemsshown: templist });
  };
}
