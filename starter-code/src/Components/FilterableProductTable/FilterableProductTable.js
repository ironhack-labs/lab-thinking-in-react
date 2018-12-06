import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';

class FilterableProductTable extends Component {
    onChange = (e) => {
    }
    render() {

        return (
            <div>
                <SearchBar onCheck={this.props.onCheck} onSearch={this.props.onSearch} search={this.onChange}/>
                <ProductTable jsonData={this.props.jsonData}/>
            </div>
        )
    }
}
export default FilterableProductTable