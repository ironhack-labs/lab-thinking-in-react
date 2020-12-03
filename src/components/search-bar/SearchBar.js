import './SearchBar.css'
import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      stocked: false
    }
  }

  handleInputChange = e => {
    const { name } = e.target
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState ({ [name]: value }, () => this.props.filterProduct(this.state.name)) 
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label>Search</label>
          <input type="text" className="form-control" name='name' value={this.state.name} onChange={ this.handleInputChange }/>
        </div>
        <div className="form-check">
          <label>Only show products on stock</label>
          <input className="form-check-input position-static" type="checkbox" name='stocked' checked={this.state.stocked} onChange={ this.handleInputChange }/>
        </div>
      </form>
    )
  }
}

export default SearchBar