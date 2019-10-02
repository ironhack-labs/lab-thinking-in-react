import React, { Component } from 'react'
import '../general.css'
import './SearchBar.css'

class SearchBar extends Component {
    handleInputChange = () => {
        this.props.toggleInStock(() => this.props.onFilterChange(this.state.search))
    }

    state = {
        search: ''
    }

    handleSearchBarChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value })
        this.props.onFilterChange(value)
    }

    render() {
        return (
            <form className="search flex flex-v aic">
                <span>Search</span>
                <input type="text" placeholder="Search" value={this.state.search} onChange={this.handleSearchBarChange} name="search"></input>
                <label>
                    <input name="isGoing" type="checkbox" onChange={this.handleInputChange} />
                    Only show products in stock
                </label>
            </form >
        )
    }
}

export default SearchBar
