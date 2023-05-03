import { useState } from "react"

function SearchBar({ searchItem, showOnlyInStock }){
    const [searchQuery, setSearchQuery] = useState()
    const [inStock, setinStock] = useState(false)


    const handleSearch = (e) => {
        const query = e.target.value
        setSearchQuery(query)
        searchItem(query)
    }

    const handleInStockFilter = (e) => {
        const checked = e.target.checked
        setinStock(checked)
        showOnlyInStock(inStock)
    }

    return(
        <>
            <label>Search</label>
            <input type="text" value={searchQuery} onChange={handleSearch} />
            <div>
            <input id="onlyInStock" type="checkbox" value={inStock} onChange={handleInStockFilter}/>
            <label htmlFor="onlyInStock">Only show product in stock</label>
            </div>
        </>
    )
}
export default SearchBar