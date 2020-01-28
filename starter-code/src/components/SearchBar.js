import React, { Component } from 'react';


class SearchBar extends Component {


    
    render() {
        return (
            <div>
                <label>Search:</label>                
                <input type = "search" value={this.props.searchInputData} onChange={this.props.handleSearchMethod}/>
            </div>
        )
    }
}

export default SearchBar