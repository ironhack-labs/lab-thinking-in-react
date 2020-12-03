import React, { Component } from 'react';

export default class SearchBar extends Component {

    handleChange = event => {
        this.props.setQuery(event.target.value)
    } 
    render() {
        return (
            <div>
                <p>Search</p>
                <input 
                    type="text" 
                    name="query"
                    value={ this.props.query }
                    onChange={ this.handleChange }
                />
                <input 
                    type="checkbox" 
                    name="inStock"
                    value={ this.props.inStock }
                    onChange={ this.handleChange }
                />
                <label htmlFor="inStock">Only show products in stock</label>
            </div>
        )
    }
}