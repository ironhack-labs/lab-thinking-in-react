import React from "react"
import ProductTable from "./ProductTable "
import SearchBar from "./SearchBar"


const FilterableProductTable = () => {

    return (
        <>
            <h1>Iron Store</h1>
            <SearchBar />
            <ProductTable />

        </>
    )
}

export default FilterableProductTable