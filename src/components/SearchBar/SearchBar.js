import React from 'react'
import { Component } from 'react'
import './SearchBar.css'

class SearchBar extends Component {

    constructor () {
        super()
        this.state = {
            search: ''
        }
    }

    handleInputChange (e) {
        const { name } = e.target
        this.setState({ [name]: e.target.value })
    }

    render () {
        
        return (
            <input type='text' placeholder='Search' name='search' value={this.state.search} onChange = {(e) => this.handleInputChange(e)}  >
                
             </input>
         )
    }
}

export default SearchBar