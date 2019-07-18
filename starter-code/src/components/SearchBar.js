import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input 
        type='text' 
        placeholder="Search"
        onChange={(e)=> this.props.filterProducts(e)}
        value={this.props.filterQuery}
         />
      </div>
    )
  }
}
