import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        this.props.searchMethod(event.target.value)
    }

    stockChange = () => {

    }

    render() {
        
        return (
            <div className="Search">
                <input
                    type="text"
                    id="text"
                    name="text"
                    // Is this right? The value?
                    value={this.props.search}
                    onChange={this.handleChange}
                />
                    <p></p>
                <input
                    type="checkbox"
                    id="stock"
                    name="stock"
                    value=""
                    onChange={this.stockChange}
                />
                <label htmlFor="stock">Only show items that are in stock</label>
            </div>
        )
    }
}
