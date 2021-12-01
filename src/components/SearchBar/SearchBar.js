import React from 'react';
import './SearchBar.css'

const SearchBar = (props) =>{

    const { productsState, setProductsState } = props

    const searchProduct = (event) => {
        const filteredProducts = productsState.filter((product) => {
            return product.name.toLowerCase().includes(event.toLowerCase())
        })
        setProductsState(filteredProducts)
    }

    return(
        <div>
            <h2>Search</h2>
                <input type="text" onChange={(event) => searchProduct(event.target.value)}></input>
        </div>
    )
}


export default SearchBar