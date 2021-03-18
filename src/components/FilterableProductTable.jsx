import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    state = {
        searchValue: ""
    }

    render() {
        const {searchValue} = this.state;
        const {products} = this.props;

        return (
            <div className="Filter">
                <h1>IronStore</h1>
                <SearchBar 
                    searchValue={searchValue} 
                    onSearchValue={(receivedValue) => 
                        this.setState({searchValue: receivedValue})}
                />
                <ProductTable 
                    searchValue={searchValue}
                    products={products}
                />
            </div>
        )
    }
}

export default FilterableProductTable
