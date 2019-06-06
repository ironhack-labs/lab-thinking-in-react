import React, { Component } from 'react';
import data from '../data.json'


class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <div>
        <p>Search</p>
        <input type="text"/>
        <label>Only show products on stock
        <input type="checkbox"/>
        </label>
      </div>
    )
  }
}

export default Searchbar
