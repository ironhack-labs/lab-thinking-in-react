import { useState } from 'react';

const SearchBar = ({ products, setProducts }) => {
    console.log(products)
    const searchProduct = (e) => {
        let query = e.target.value
        let findProducts = products.filter((el) => {
            return el.name.toLowerCase().includes(query.toLowerCase())
        })
        setProducts(findProducts)
    }
    return (
        <input onChange={searchProduct} type="text" />
    )
}

export default SearchBar
