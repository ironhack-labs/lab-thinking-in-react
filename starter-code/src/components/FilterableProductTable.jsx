import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: this.props.products.data,
            filtered: this.props.products.data,
            searchString: ""
        };
    }

    searchProducts() {
        let search = this.state.searchString
        let dataSearch = [...this.state.filtered];
        let filteredData = dataSearch.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()));
       
        this.setState({
            ...this.state,
            products: filteredData
        });

    }
    checkSearch(e) {
        this.setState({
            ...this.state,
            searchString: e.target.value
        },
        
        () => this.searchProducts());
    }

    render() {
        return (
            <div>
                <h1>IronStore</h1>
                <SearchBar search={e => this.checkSearch(e)} />
                <ProductTable products={this.state.products} />

            </div>
        )
    }
}
