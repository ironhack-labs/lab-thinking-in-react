import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      checked: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    })
  }

  handleClick(e) {
    this.setState({
      checked: e.target.checked
    })
  }

  render() {
    return (
      <form onChange={() => {
        this.props.filterFunc(this.state.query);
        this.props.stockFunc(this.state.checked);
        }} onSubmit={e => e.preventDefault()}>
        <input type="text" name="search" placeholder="Enter search term" value={this.state.query} onChange={(e) => this.handleChange(e)}/>
        {/* <input type="checkbox" onClick={(e) => this.handleClick(e)} /> Only show products in stock? */}
      </form>
    )
  }
  
}

export default SearchBar;