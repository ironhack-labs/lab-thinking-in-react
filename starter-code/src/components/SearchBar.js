import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      isStock: true,
    }
  }

  handleChange = (e) => {
    this.props.onQueryChange(e.target.value);
  }

  isStocked = (e) => {
    this.props.isStockedChange(e.target.value);
    this.setState({ isStock: !this.state.isStock })
  }

  render() {
    console.log('render SearchBar');
    return (
      <div className="search">
        <input 
          type="text"
          onChange={e => this.handleChange(e)}/>
        <label for="stock">Only show prodcuts in stock</label>
        <input
          id="stock" 
          type="checkbox"
          value={this.state.isStock}
          onChange={e => this.isStocked(e)}/>
      </div>
    )
  }
}

export default SearchBar;