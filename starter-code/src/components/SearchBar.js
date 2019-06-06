import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // searchValue : ""
    }
  }

  handleSearchChange= e =>{
    let {name, value}=e.target
    this.setState({[name]: value},() => {
      this.props.search(value.toUpperCase())
    })
  }

  render() {

    return (
      <form>
        <label> Search shit items in shit store 
          <br></br>
          <input name="search" type="search" value={this.state.searchValue} onChange={this.handleSearchChange}></input>
        </label>
      </form>
    )
  }
}
export default SearchBar