import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    search: "",
    stocked: false,
  }

  handleSearchInput = (event) => {

    this.setState({
      search: event.target.value
    })

    this.props.searchItem(event.target.value)
  }

  handleBooleanInput = (event) => {
    this.setState({
      stocked: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
    this.props.stockedItem(event.target.checked)
  }
 
  render(){
    


    return (
<div>

          <input type="text" placeholder="Search Item" name="search" value={this.state.search} onChange={(e) => this.handleSearchInput(e)} />
<br></br>
          <input type="checkbox" name="stocked" value={this.state.stocked} checked={this.state.stocked} onChange={(e) => this.handleBooleanInput(e)} /> Show only in Stock

    </div>
    )
  }
}

export default SearchBar;