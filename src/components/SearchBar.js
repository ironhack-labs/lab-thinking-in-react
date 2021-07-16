import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        this.props.setQuery(event.target.value);
    }

    render() {
        return (
            <>
                <span>Search: </span>
                <input
                    type="text"
                    name="search"
                    placeholder="Search..."
                    value={this.props.query}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}
