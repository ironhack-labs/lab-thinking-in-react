import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    handleSearchInput = (e) => {
        const value = e.target.value
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
