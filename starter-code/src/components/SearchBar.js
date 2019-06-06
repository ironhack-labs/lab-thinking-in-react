import React, { Component } from 'react'

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isInStock: false,
    }


  }

  handleChange = e => {
    let { name, value } = e.target

    this.setState({ [name]: value })
    this.props.searching(value)
  }

  handleCheck = e => {
    if (e.target.name === "inStock") this.setState({ isInStock: !this.state.isInStock })
    this.props.filtering(this.state.isInStock)
  }

  render() {

    return (
      <form>
        <input className="searchBar" type="search" name="searchBar" value={this.state.searchBar} onChange={(e) => this.handleChange(e)} /><br></br>
        <label>Only show products in stock
                <input type="checkbox" name="inStock" checked={this.state.isInStock} onChange={(e) => this.handleCheck(e)} />
        </label>
      </form>
    )
  }
}

export default SearchBar