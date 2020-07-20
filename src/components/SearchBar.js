import React, { Component } from 'react'

export default class SearchBar extends Component {

    handlInputChange = e => {
        this.props.handleInput(e.target.value)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={this.props.query}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
} 