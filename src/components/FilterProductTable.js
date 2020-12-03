import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

export default class FilterProductTable extends Component {

    state = {
        query: '',
        stocked: false,
    }

    setQuery = (name, query) => {
        // console.log('NAME', name, 'QUERY', query)
        this.setState({ [name]: query });
    }

    render() {
        return (
            <>
                <h1>IronStore</h1>
                <SearchBar 
                    query = { this.state.query }
                    setQuery = { this.setQuery }
                    stocked = { this.state.stocked }
                />
                <ProductTable 
                    products = { this.props.products }
                    query = { this.state.query}
                    stocked = { this.state.stocked }
                />
            </>
        )
    }
}
