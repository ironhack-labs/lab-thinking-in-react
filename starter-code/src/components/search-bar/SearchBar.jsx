import React, { Component } from 'react'

export default class SearchBar extends Component {

  updateInput = (e) => {
    // console.log("search",e.target.value) 
    this.props.searchProductsP(e, e.target.value)
  }

  render() {
    return (
      <div className="field ">
        <div className="title is-centered">
          Search
        </div>
        <div className="control is-expanded">
          <input className="input" type="text"  onChange={this.updateInput} placeholder="Find a product" />
          <br/>
          <br/>
        </div>
      </div>
    )
  }
}
