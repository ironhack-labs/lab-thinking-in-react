import React, { Component } from 'react';

import '../App.css';

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }

    handleChange = event => {
        event.preventDefault();
        let searchWord = event.target.value;
        this.props.filterData(searchWord)
    }
    

    render() {
        return (
            <div>
                <input type="search" onChange={this.handleChange}></input>
                <form>
                    <input type="checkbox" />only show products on stock
              </form>
            </div>
        )
    }

}

export default SearchBar;