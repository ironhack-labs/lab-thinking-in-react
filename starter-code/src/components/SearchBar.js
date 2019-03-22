import React, { Component } from 'react'

export default class SearchBar extends Component {

  constructor () {
    super()

    this.state = {
      searchString : ""
    }
  }

  handleChange = (e) => {
    this.setState({
      searchString : e.target.value  
    }, () => this.props.method(this.state.searchString))
  }
    
  render() {

    return (
      <div className="search-container">
            <div className="search-bar">
              <input type="text" name="name" value={this.state.searchString} className="searchTerm" placeholder="What are you looking for?" onChange= { (e) => { 
                this.handleChange(e) 
              }}
              />
            </div>
      </div>
    )
  }
}
