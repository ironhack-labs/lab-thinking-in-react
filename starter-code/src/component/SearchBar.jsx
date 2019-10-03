import React, { Component } from 'react'

export default class SearchBar extends Component {
  
  render() {
    return (
      <div>
        <p>Search</p>
        <input placeholder="Search your favourite item" className="search-input" type="text" onChange={e=> this.props.searchFunction(e)}></input>
       <div className="box-check">
       <input type="checkbox" onChange={e=> this.props.checkFunction(e)} id="onstock"></input>
        <p>Only show products on stock</p>
       </div>
      </div>
    )
  }
}
