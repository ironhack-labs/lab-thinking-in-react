import React, { Component } from 'react'

class SearchBar extends Component {

    handleSearch = e => {

        this.props.searchBar(e.target.value)
        console.log(this.props.searchBar)

    }



    render() {

        return (

            <input type='text' placeholder='Buscador' onChange={this.handleSearch} />
        )
    }
}

export default SearchBar