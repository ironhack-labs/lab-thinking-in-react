import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    
  render() {
    return (
      <form>
        <input type="text" placeholder="Search" onChange={this.props.handleChange}/>
        <input type="checkbox" onClick={this.props.handleStockChange}/>Only show product in Stock
      </form>
    )
  }
}
