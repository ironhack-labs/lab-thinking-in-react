import React, { Component } from 'react'

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <form className="search-form" id="test">
        

        <input
          type="search"
          name="productName"
          placeholder="Search products"     
          onChange={e => this.props.updateSearchFormData(e)}
        ></input>
        

        <input type="checkbox"
        onClick={e => this.props.updateCheckbox(e)}></input>

        
      </form>
      </div>
    )
  }
}
