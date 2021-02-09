import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchInput: ''
    }


    handleSearchInput = (elem) => {
        const value = elem.target.value
        this.setState({
            searchInput: value
        })
        this.props.searchProducts(value)
    }

    render() {
        return (
            <div>
                <form>
                    <label for="search">Search</label>
                    <input type="text" name="search" id="search" value={this.state.searchInput} onChange={this.handleSearchInput} />
                </form>
            </div>
        )
    }
}

export default SearchBar;