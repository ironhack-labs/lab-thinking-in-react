import React, { Component } from 'react'

export default class SearchBar extends Component {
    handleChange = event => {
        this.props.search(event.target.value)
    }
    render() {

        return (
            <>
                <label htmlFor="search">Search </label>
                <input type="text "name="search" value={this.props.query}
                onChange={this.handleChange}/>
                <label htmlFor="inStock"> In stock </label>
                <input type="checkbox" name="inStock" 
                checked={this.props.inStock}
                onChange={() => this.props.handleInStock()}
                />
            </>
        )
    }
}
