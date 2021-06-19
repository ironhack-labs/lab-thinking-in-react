import React, { Component } from 'react'
import ProductTable from "./ProductTable";
import SearchBar from './SearchBar';
import data from '../data.json';

class FilterableProductTable extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            filteredArr: data.data
        }
    }

    onChange(field, value) {
        // parent class change handler is always called with field name and value
        this.setState({filteredArr: data.data.filter(product => (product.name).toLowerCase().includes(value.toLowerCase()))});
        console.log(this.state.filteredArr);
    }

    render () {
        return (
            <div className="productFilter">
                <SearchBar
                    onChange={this.onChange.bind(this)}
                />
                <ProductTable
                    productArray = {this.state.filteredArr}
                />
            </div>
        )
    }
}

export default FilterableProductTable;