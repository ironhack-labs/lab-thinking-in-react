import React, { Component } from 'react';

export class Search extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.props.onInput(value)
  }
  
  render () {
    return (
      <div className="search">
        <h3>Search</h3>
        <input type="text" onChange={this.handleChange}/>
      </div>
    )
  }
}