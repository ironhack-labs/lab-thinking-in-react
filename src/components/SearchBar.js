
import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super()
        this.state = {
            products: props.products
        };
    }

    search(e) {
        const { value } = e.currentTarget;
        this.props.filterProducts(value)
    }


    render() {
        return (

            <div className="App">
                <label>Search: </label>
                <input onChange={(e) => this.search(e)} type="text" placeholder="Search products..." />
            </div>
        );
    }
}

export default SearchBar;