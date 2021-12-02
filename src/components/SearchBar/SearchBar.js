import React from 'react';
import './SearchBar.css'

const SearchBar = (props) =>{

    const { productsState, setProductsState } = props


    const searchProduct = (word) => {

        const searchProducts = productsState.products.filter((product) => {
            return product.name.toLowerCase().includes(word.toLowerCase())
        })
        setProductsState({...productsState, filteredProducts: searchProducts})
       
    }

    return(
        <div>
            <h2>Search</h2>
                <input type="text" onChange={(event) => searchProduct(event.target.value)}></input>
        </div>
    )
}


export default SearchBar