import React, { Component } from 'react'

export default class SearchBar extends Component {

    changeHandler = event => {
        this.props.setQuery(event.target.value)
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    value={this.props.query}
                    onChange={this.changeHandler}
                />
            </div>
        )
    }
}