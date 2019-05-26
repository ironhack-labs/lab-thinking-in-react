import React from 'react'

class SearchBar extends React.Component {
  state = {
    searchText: ''

  }

    // handleChange = e => this.setState({ searchText: e.target.value })
    // handleSubmit = e => {
    //   e.preventDefault()
    //   console.log(this.state.searchText)
    //   this.props.searchBarText(this.state.searchText)
    // }

  render () {
    return (
      <div>
        <h2>Search</h2>
        <form 
        // onSubmit = {this.handleSubmit}
        >
          <div>
            <input 
            type="text" 
            // value ={this.state.searchText}
            // onChange={this.handleChange}
            name="searchText" 
            placeholder="introduce tu busqueda"
            ></input>
          </div>
          <div>
            <input 
            type="checkbox" 
            name="stock" ></input>Only show products onstock
          </div>
        </form>
      </div>
    )
}
}

export default SearchBar