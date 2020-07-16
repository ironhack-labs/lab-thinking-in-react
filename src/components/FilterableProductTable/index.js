import React from 'react'
import SearchBar from '../SearchBar'
import ProductTable from '../ProductTable'
import './style.css'

export default function index({ title, products }) {
    return (
        <div>
            <h1>{title}</h1>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    )
}
