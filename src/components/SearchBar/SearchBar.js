import React from 'react';
import './SearchBar.css'

const SearchBar = (props) =>{

    const { productsState, setProductsState ,setSearchWriteBar} = props


    const searchProduct = (event) => {
        event ? setSearchWriteBar(true) : setSearchWriteBar(false)

        const searchProducts = productsState.filteredProducts.filter((product) => {
            return product.name.toLowerCase().includes(event.toLowerCase())
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