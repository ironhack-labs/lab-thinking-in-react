import React, { Component } from 'react'

export default class SearchBar extends Component {

    filter = (value) => {
        this.props.filter(value)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.filter}></input>
            </div>
        )
    }
}
