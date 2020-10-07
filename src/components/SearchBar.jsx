import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div>
                <label htmlFor="search">Search</label> 
                <br/>
                <input id="search" type="text"/>
            </div>
        )
    }
}

export default  SearchBar 