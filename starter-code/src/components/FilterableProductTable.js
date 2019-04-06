import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// in other words, class FilterableProductTable inherits from Component
class FilterableProductTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            filteredProducts: this.props.products.data,
            query: '',
            checked: false
        }
    }

    handleSearch = (e) => {
        console.log(e.target.value);
    }

    render() {
        // console.log('data: ', this.props.products.data);
        return (
            <div className="FilterProductTable">
                <h1>IronStore</h1>
                <SearchBar />
                <ProductTable />
            </div>
        );
    }
}

export default FilterableProductTable;