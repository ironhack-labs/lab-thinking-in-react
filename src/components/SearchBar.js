import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        // console.log(event.target.value);
        this.props.setQuery(event.target.value)
    }

    handleCheckbox = event => {
        // console.log(event.target.value);
        this.props.setInStock(event.target.checked)
    }


    render() {
        console.log(this.props.inStock);
        return (
            <>
                <input
                    type="text"
                    name="query"
                    value={this.props.query}
                    onChange={this.handleChange}
                    placeholder="search.."
                />
                <br /> <br />
                <label htmlFor="stock">Only show products in stock</label>
                <input
                    type="checkbox"
                    name="stocked"
                    checked={this.props.inStock}
                    onChange={this.handleCheckbox}
                />
            </>
        )
    }
}
