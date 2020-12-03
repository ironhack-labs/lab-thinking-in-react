import React, { Component } from 'react'


export default class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            search: ''

        }
    }


    handleInputChange = e => {

        const { name, value } = e.target
        this.setState({ [name]: value })
        this.props.searchProduct(this.state.search)
    }



    render() {

        return (
            <form>
                <label>Search</label>
                <input type="text" name="search" value={this.state.search} onChange={this.handleInputChange} />
            </form>
        )
    }
}