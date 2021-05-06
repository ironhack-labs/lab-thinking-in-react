import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        this.props.searchMethod(event.target.value)
    }

    stockChange = event => {
        this.props.stockMethod(event.target.checked)
    }

    render() {
        return (
            <div className="Search">
                <input
                    type="text"
                    id="text"
                    name="text"
                    // MAKE SURE THIS IS CORRECT
                    value={this.props.search.search}
                    onChange={this.handleChange}
                />
                    <p></p>
                <input
                    type="checkbox"
                    id="stock"
                    name="stock"
                    value={this.props.search.stocked}
                    onChange={this.stockChange}
                />
                <label htmlFor="stock">Only show items that are in stock</label>
            </div>
        )
    }
}
