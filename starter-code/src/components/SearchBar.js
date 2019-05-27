import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchText: "",
    checkBox: false
  }

  handleChange = e => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
    this.props.handleSearch(e.target.value)
  }

  handleClick = () => {
    this.setState({
      checkBox: this.state.checkBox ? false : true
    })

    this.props.handleFilter(this.state.checkBox)
  }

  render(){

    return (
      <div className="search-section">
        <h2 className="search-title">Search</h2>
        <input name='searchText' type="text" className="input" value={this.state.searchText} onChange={this.handleChange}></input>
        <form>
          <input type="checkbox" onClick={() => this.handleClick()}></input> <p>Only show products in stock</p>
        </form>
      </div>
    )
  }
}

export default SearchBar