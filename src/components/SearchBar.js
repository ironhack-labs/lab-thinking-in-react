import React, { Component } from 'react'

class SearchBar extends Component {
    state = {
        search: ''
    }

    handleSearch = (event) => {
        const { value } = event.target
        this.setState({
            search: value
        })
        this.props.searchBar(this.state.search)
    }

render() {
return (
    <div>
        <input
          className="input"
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={(e) => this.handleSearch(e)}
        />
        <br/>
        <input 
            type="checkbox"
            onChange={() => {this.props.onStock()}}
            checked={this.props.stocked}
            /> 
            <h4>Only show products on stock</h4>
    </div>

)
}
}

export default SearchBar