import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilteredTable extends Component {
    state = {
        search: '',
        stocked: false
    }

    searchMethod = searchParam => {
        this.setState({
            search : searchParam
        })
    }

    stockMethod = event => {
        this.setState({
            stocked: event
        })
    }

    render() {
        return (
            <div>
                <h1>Ironstore</h1>
                <SearchBar search={this.state} searchMethod={this.searchMethod} stockMethod={this.stockMethod}/>
                <ProductTable products={this.props.products} search={this.state}/>
            </div>
        )
    }
}
