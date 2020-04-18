import React, { Component } from 'react'

export default class SearchBar extends Component {

  handleSearch = (e) => {
    this.props.handleSearch(e.target.value)
  }

  handleCheck = (e) => {
    this.props.handleInStock(e.target.checked)
  }

  render() {
    return (
      <div>
        <div className="field">
          <div className="control">
            <input placeholder="Search..." className="input is-medium" onChange={this.handleSearch} type="text" name="search" id="search" />
          </div>
        </div>
        <div className="field">
          <div className="check">
            <label className="checkbox">
              <input onChange={this.handleCheck} type="checkbox" name="check" id="check" />
              Only stock products
            </label>
          </div>
        </div>
      </div>
    )
  }
}
