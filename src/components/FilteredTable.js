import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilteredTable extends Component {
    state = {
        search: '',
        stocked: true
    }

    searchMethod = searchParam => {
        this.setState({
            search : searchParam
        })
    }

    render() {
        return (
            <div>
                <h1>Ironstore</h1>
                <SearchBar search={this.state.search} searchMethod={this.searchMethod}/>
                <ProductTable products={this.props.products} search={this.state.search}/>
            </div>
        )
    }
}
