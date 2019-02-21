import React, { Component } from 'react'


class SearchBar extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="box">
        <h2>Search:</h2>
        <input onChange={this.props.onSearch} type="text"/>
        <h2>Show products in stock:</h2>
        <input onChange={this.props.onCheck} type="checkbox"/>
      </div>
    )
  }

}
export default SearchBar