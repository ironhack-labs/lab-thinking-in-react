import React, { Component } from 'react';
import SearchBar from './SearchBar';
import 'bulma/css/bulma.css';
import ProductTable from './ProductTable';
import { data } from './data.json';


class FilterableProductTable extends Component {
    constructor() {
        super();
        this.state= {
            products: data,
            filtered: data
        }
    }
    
    findProduct = (word) => {
        const _data = [...this.state.products];
        let filtered = _data.filter(e => {
            return e.name.includes(word)
        });
        this.setState({ filtered });
    }



    render() {
        console.log(this.state.filtered)
        return (
            <div className="container">
                <SearchBar onChange={this.findProduct}></SearchBar>
                <ProductTable filtered={this.state.filtered}></ProductTable>
            </div>
        )
    };
};

export default FilterableProductTable;