import React, { Component } from 'react'

export default class SearchBar extends Component {

    handleSearch = event => {
        this.props.searchProduct(event.target.value)
    }

    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="searchBar">Search</label>
                    <input 
                        type="text" 
                        name="searchBar" 
                        id="searchBar" 
                        onChange={this.handleSearch}
                        value={this.props.renderValue}
                        />
                    <label htmlFor="onStock">On Stock ?</label>
                    <input type="checkbox" name="onStock" id="onStock"/>
                </form>
            </div>
        )
    }
}
