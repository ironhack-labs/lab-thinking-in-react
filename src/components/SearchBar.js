import React, { Component } from 'react'

export default class SearchBar extends Component {
    handleChange = (event) => {
        console.log("search input", event.target);
        this.props.setQuery(event.target.value)
    }

    handleChecked = (event) => {
        console.log("checked input", event.target);
        this.props.setChecked(event.target.value)
    }

    render() {
        return (
            <div>
            <label htmlFor="query">Search</label>
            <input type="text" name="query" id="query"
                value={this.props.query}
                onChange={this.handleChange}
            />
            <label htmlFor="inStock">Only show products in stock</label>
            <input type="checkbox" name="inStock" id="inStock" 
            value={this.props.inStock} 
            onChange={this.handleChecked}/>
        </div> 
        )
    }
}
