import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props)
    
  }

  render() {
    return (
      <div className="field">
        <input
          className="input is-info"
          type="text"
          placeholder="search"
          onChange={e => this.props.search(e.target.value)}
          name="searchBox"
          value={this.props.searchInput}
          
        />
    </div>    
    )
  }
}

