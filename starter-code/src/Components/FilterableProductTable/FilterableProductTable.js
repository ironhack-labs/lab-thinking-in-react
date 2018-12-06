import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
    onChange = (e) => {
    }
    render() {

        return (
            <div>
                <SearchBar search={this.onChange} />
                <ProductTable />
            </div>
        )
    }
}
export default FilterableProductTable