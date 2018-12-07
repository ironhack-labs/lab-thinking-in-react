import React, { Component } from 'react'

export default class SearchBar extends Component {

    render() {
        return (
            <div>
                <input className="input" type="text" placeholder="Products..."
                    value={this.props.search} onChange={e => this.props.searchInput(e.target.value)}></input>
            </div>
        )
    }
}
