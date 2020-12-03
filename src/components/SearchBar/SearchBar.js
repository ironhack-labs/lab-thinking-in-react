import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = (event) => {
        this.props.setQuery(event.target.value)
    }

    handleCheckboxChange = (event) => {
        this.props.setInStock(event.target.checked)
    }


    render() {
        console.log(this.props.setInStock)
        return (
            <div>
                <h3>Search</h3>
                <input 
                    type="text" 
                    name="search"
                    onChange={this.handleChange}
                    value={this.props.query}
                    />
                <label htmlFor="checkbox">Only show products in stock</label>
                <input 
                    type="checkbox" 
                    name="checkbox"
                    onChange={this.handleCheckboxChange}
                    checked={this.props.inStock}
                    />
            </div>
        )
    }
}
