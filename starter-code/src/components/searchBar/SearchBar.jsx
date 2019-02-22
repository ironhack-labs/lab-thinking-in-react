import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(){
    super()
    this.state = {search: ""}
  }

  handleChange =(e)=>{
    e.preventDefault();
    let productSearch = e.target.value;
    this.props.searchFunction(productSearch)
  }

  render(){
    return(
      <div>
        <input type="text" onChange={e => this.handleChange(e)} placeholder="Search..."></input>
      </div>
    )
  }

}

export default SearchBar