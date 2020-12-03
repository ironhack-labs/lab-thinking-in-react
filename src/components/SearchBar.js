import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleChange = event => {
        console.log('rodger rodger')
    this.props.setSearch (event.target.value)
    }   

    // handleChange = event => {
    //     // this.props.setQuery(event.target.value)
    // }

    render() {
        return (
            <div>
                <label htmlFor="search">
                <input 
                    type ="text" 
                    name ="search" 
                    id= "search" 
                    placeholder= "Search for a product.." 
                    value= {this.props.search}
                    onChange= {this.handleChange} 
                    class="searchBar"
                />
            </label> 
            </div>
        )
    }
}
