import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import '../App.css'

class SearchBar extends Component {

    constructor() {
        super()
        this.state = {
            text: ''
        }
    }

    handleInputChange = e => {
        let { name, value } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = e => {

        e.preventDefault()

        this.props.searchProduct(this.state)

    }

    render() {
        return (
            <>
                <h2>Search</h2>
                <form onKeyUp={this.handleSubmit}>
                    <input className='search-bar' type="text" name="text" value={this.state.text} onChange={this.handleInputChange} />
                </form>
            </>
        )
    }
}

export default SearchBar



