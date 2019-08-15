import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }

    }

    handleInputChange = e => {
        let { name, value } = e.target

        this.setState({ [name]: value },
            () => this.props.findProducts(this.state.search))


    }

    render() {
        return (
            <input type="text" name="search" value={this.state.search} placeholder="Search" onChange={this.handleInputChange} />
        )
    }
}

export default SearchBar