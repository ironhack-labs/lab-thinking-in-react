import React, { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

export default function FilterableProductTable(props) {

    //props: products
    const initialFilter = {
        name: '',
        onStock: false
    }
    const [search, setSearch] = useState(initialFilter)

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar setSearch={setSearch} search={search}/>
            <ProductTable products={props.products} filterValue={search}/>
        </div>
    )
}