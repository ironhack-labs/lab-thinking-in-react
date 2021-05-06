import React from 'react'
import { Component } from 'react'

class SearchBar extends Component {

    constructor() {
        super()
        this.state ={
            value: '',
            checked: false
        }
    }
    
    handleInputChange(e) {
        const value = e.target.value
        this.setState({ value: value })
        this.sendQuery(value)
    }

    sendQuery(query) {
       this.props.filterProduct(query) 
    }

    render() {
        return (
            <>
                <input type="text" onChange={e => this.handleInputChange(e)} value={this.state.value}/><br></br>
                <input type="checkbox"/><label>Show only products in stock</label>
            </>
        )
    }
}

export default SearchBar