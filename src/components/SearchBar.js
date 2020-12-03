import React, { Component } from 'react';

export default class SearchBar extends Component {

    handleChange = event => {
        // console.log('EVENT', event.target)
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.props.setQuery(name, value)
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
                    name="stocked"
                    value={ this.props.stocked }
                    onChange={ this.handleChange }
                />
                <label htmlFor="inStock">Only show products in stock</label>
            </div>
        )
    }
}