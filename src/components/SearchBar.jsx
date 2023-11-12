import { useState } from "react";

function SearchBar(props) {
    const [showOnlyInStock, setShowOnlyInStock] = useState(false)
    const [searchBarQuery, setSearchBarQuery] = useState('')

    function handleSearchInput(event) {
        event.preventDefault()
        setSearchBarQuery(event.target.value)

        if (event.target.value == '') {
            props.setFilteredProducts(props.products)
        } else {
            let tempFilteredProducts = [...props.products].filter((product) => product.name.toLowerCase().includes(event.target.value.toLowerCase()))
            props.setFilteredProducts(tempFilteredProducts)
        }
    }

    function handleOnlyInStockCheckbox(event) {
        setShowOnlyInStock(event.target.checked)
        let tempFilteredProducts = [...props.products].filter((product) => {
            const matchesSearchBarQuery = product.name.toLowerCase().includes(searchBarQuery.toLowerCase())
            let matchesCheckbox = false;
            if (event.target.checked == false) matchesCheckbox = true;
            else matchesCheckbox = product.inStock == true;
            return matchesSearchBarQuery && matchesCheckbox;
        })
        props.setFilteredProducts(tempFilteredProducts)
    }

    function filterProducts() {
        let filtered = []

        let tempFilteredProducts = props.products.filter((product) => {
            const matchesSearchBarQuery = product.name.toLowerCase().includes(searchBarQuery.toLowerCase())
            let matchesCheckbox = false;
            if (showOnlyInStock == false) matchesCheckbox = true;
            else matchesCheckbox = product.inStock == true;
            return matchesSearchBarQuery && matchesCheckbox;
        })
        props.setFilteredProducts(tempFilteredProducts)


    }

    return (
        <div>
            <form action="">
                <label htmlFor="search-input">Search</label>
                <input type="text" id="search-input" onChange={handleSearchInput} />
            </form>
            <p>
                <label htmlFor="only-in-stock-checkbox">Only show products in stock</label>
                <input type="checkbox" id="only-in-stock-checkbox" checked={showOnlyInStock} onChange={handleOnlyInStockCheckbox} />
            </p>
        </div>
    )
}

export default SearchBar;
