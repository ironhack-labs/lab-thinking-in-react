import {useState} from 'react'
import SearchBar from './../SearchBar7Searchbar'
import ProductTable from './../ProductTable/ProductTable'
import jsonData from './../../data.json'

function ProductPage () {

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar />
            <ProductTable jsonData={ jsonData }/>
        </div>
    )
}

export default ProductPage