import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
    onChange = (e) => {
    }
    render() {

        return (
            <div>
                <SearchBar onSearch={this.props.onSearch} search={this.onChange}/>
                <ProductTable jsonData={this.props.jsonData}/>
            </div>
        )
    }
}
export default FilterableProductTable