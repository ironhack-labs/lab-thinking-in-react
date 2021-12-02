import React from 'react'
import { useState } from 'react'


const SearchBar = (props) => {
    const { products, setFilteredProducts } = props
    const [query, setQuery] = useState('') //States to keep the search query and is in stock checkbox, the checkbox is initialized
    const [checkbox, setCheckbox] = useState(false) //as false as it isn't checked by default when loading the page


    //This function filters the products, it takes the query and the is in stock checkbox
    const filterProducts = (newQuery, checkbox) => {
        let filteredProducts

        if (checkbox) {
            filteredProducts = products.filter((product) => {
                return (product.name.toLowerCase().includes(newQuery.toLowerCase()) && product.stocked) //Return products with matching
            })                                                                                          //name and in stock
        }
        else {
            filteredProducts = products.filter((product) => {
                return product.name.toLowerCase().includes(newQuery.toLowerCase())
            })
        }

        setFilteredProducts(filteredProducts) //Change the state to the new filtered products for display
    }


    return (
        <div>
            <label>Search: </label>
            <input type="text" placeholder="Search products..."
                onChange={(event) => {
                    setQuery(event.target.value)
                    filterProducts(event.target.value, checkbox)
                }}
            />

            <label>Only show products on stock</label>
            <input type="checkbox"
                onClick={(event) => {
                    setCheckbox(event.target.checked)
                    filterProducts(query, event.target.checked)
                }}
            />
        </div>
    )
}

export default SearchBar