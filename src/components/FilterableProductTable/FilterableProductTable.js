import React from 'react'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'
import "./FilterableProductTable.css";
import json from "../../data.json";

export default function FilterableProductTable() {
    return (
        <section id="filterable-product-table">
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable data={json.data}/>
        </section>
    )
}
