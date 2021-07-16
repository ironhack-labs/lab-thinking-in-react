import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        this.props.setQuery(event.target.value)
    }

    render() {
        return (
            <>
                <h3>Search</h3>   
                <input 
                    type= 'text'
                    name= 'search'
                    id= 'search'
                    value= {this.props.query}
                    onChange= {this.handleChange}
                />
            </>
        )
    }
}
