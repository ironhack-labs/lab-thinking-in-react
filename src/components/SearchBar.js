import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchInput: ''
        }
    }
    render() {
        return (
            <div>
                <form>
                    <label>Search</label>
                    <input type="text" value={this.state.searchInput} />
                </form>
            </div>
        )
    }
}

export default SearchBar;
