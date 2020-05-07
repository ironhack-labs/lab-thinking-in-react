import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import ProductTable from './ProductTable.js';

export default class MainApp extends Component {
    render() {
        return (
            <div className="container">
                <h1>This is the main app container</h1>
                <SearchBar />
                <ProductTable />
            </div>
        );
    }
}
