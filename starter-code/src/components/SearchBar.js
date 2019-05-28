import React from 'react'

class SearchBar extends React.Component{


  handleChange = (event) => {
    this.props.filterBy(event.target.value)
  }

  render(){
    return (
      <form>
          <label>Search</label>
            <input value={this.props.text} onChange={(e) => this.handleChange(e)} className="form-control" type="text" aria-label="Search" />
          <label>Only show products on stock</label>
            <input type="checkbox"/>
      </form>
    )
  }
}

export default SearchBar