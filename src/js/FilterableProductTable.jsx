import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            checked: false
        };
        this._handleInStockChange = this._handleInStockChange.bind(this);
        this._handleSearchTextChange = this._handleSearchTextChange.bind(this);
    }

    render() {
        return (
            <div className="table-box">
                <SearchBar
                    searchText={this.state.searchText}
                    checked={this.state.checked}
                    onSearchTextChange={this._handleSearchTextChange}
                    onInStockChange={this._handleInStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    searchText={this.state.searchText}
                    checked={this.state.checked}
                />
            </div>
        );
    }

    _handleSearchTextChange(searchText) {
        this.setState({
            searchText: searchText
        });
    }

    _handleInStockChange(checked) {
        this.setState({
            checked: checked
        });
    }
}

export default FilterableProductTable;
