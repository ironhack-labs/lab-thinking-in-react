import React from 'react'
import SearchBar from '../SearchBar'
import ProductTable from '../ProductTable'
import './style.css'

export default function index({ title, products, handlerOnChange, handlerIsChecked }) {

    return (
        <div>
            <h1>{title}</h1>
            <SearchBar
                handlerOnChange={handlerOnChange}
                handlerIsChecked={handlerIsChecked} />
            <ProductTable products={products} />
        </div>
    )
}
