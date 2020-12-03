import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    handleSearch = (event) => {
       this.props.setQuery(event.target.value)
    }
    render() {
        return (
            <div>
                <input 
                type = "text" 
                name = "search" 
                placeholder="search" 
                onChange = {this.handleSearch}
                />
            </div>
        )
    }
}
