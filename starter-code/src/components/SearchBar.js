import React, { Component, Fragment } from 'react'

class SearchBar extends Component {
    handleChange = event => {
        const nameInput = event.target.value
        this.props.searching(nameInput)
    }

    render() {
        const { name } = this.props
        return (
            <Fragment>
                <tr>
                    <th><label>Search</label>
                        <input type="text" value={name} onChange={this.handleChange} /></th>
                </tr>
                <tr>
                    <th>
                        <label>Only show products on stock</label>
                        <input type="checkbox" />
                    </th>
                </tr>
            </Fragment>
        )
    }
}

export default SearchBar
