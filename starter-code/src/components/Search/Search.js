import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..."></input>
        <input type="checkbox"></input>
        <label for="checkbox">Only Show Products in Stock</label>

      </div>
    )
  }
}
