import React, { Component } from 'react'
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        searchInput: ''
    }

    searching = (searchInput) => {
        this.setState({
            searchInput
        })
    }

    render() {
        const { searchInput } = this.state
        return (
            <table>
                <thead>
                    <tr>
                        <th><h1>IronStore</h1></th>
                    </tr>
                    <SearchBar products={this.state} searching={this.searching} />
                </thead>
                <tbody>
                    <tr>
                        <td><ProductTable searchInput={searchInput} products={this.props.products} /></td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FilterableProductTable