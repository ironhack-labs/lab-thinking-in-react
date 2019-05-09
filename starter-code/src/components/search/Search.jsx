import React, { Component } from 'react';
import './search.css'

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchValue: '',
      checkValue: false,
    }
    this.handlerInput = this.handlerInput.bind(this);
  }
  
  handlerInput(event) {
    this.setState({
      searchValue: event.target.value
    })
  }

  handlerCheck(event) {
    this.setState({
      checkValue: event.target.checked
    })
  }

  render(){
    return (
      <form className="search-form">
        <input type="search" name="search" value={this.state.searchValue} onChange={(e) => this.handlerInput(e)} placeholder="Type your search" />
        <label>
          This item is stored?
          <input type="checkbox" name="stocked" value={this.state.checkValue} onChange={(e) => this.handlerCheck(e)} />
        </label>
      </form>
    )
  }
}

export default Search;
