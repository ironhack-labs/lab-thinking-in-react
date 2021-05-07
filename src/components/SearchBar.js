import React, { Component } from 'react'


export default class SearchBar extends Component {
    
    handleSearch = event => {
        console.log(event.target.value)
        this.props.searchValue(event.target.value)
    }

    handleCheckbox = event => {
        console.log(event.target.value)
        this.props.inStockValue(event.target.checked)
    }

    render() {
        return (
            <div>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={this.props.search}
                        onChange={this.handleSearch}
                    />
                    <input
                    type="checkbox"
                    name="inStock"
                    id="inStock"
                    checked={this.props.inStock}
                    onChange={this.handleCheckbox}
                />
                    
            </div>
        )
    }
}
