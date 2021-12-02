import React, { useState } from "react"
import styled from "styled-components"

// Components
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    & > * {
        justify-self: center;
    }
`

export default function FilterableProductTable(props) {
    const products = props.products

    const [search, setSearch] = useState("")
    const [inStock, setInStock] = useState(false)

    const handleSearch = e => {
        setSearch(e.target.value)
    }

    const handleStock = e => {
        setInStock(e.target.checked)
    }

    let results = products.filter(product => {
        return product.name.toLowerCase().includes(search)
    })

    if (inStock) {
        results = results.filter(product => {
            return product.stocked === true
        })
    }

    return (
        <Container>
            <h1>IronStore</h1>

            <SearchBar
                searchValue={search}
                changeSearch={handleSearch}
                changeCheckbox={handleStock}
            />

            <ProductTable products={results} />
        </Container>
    )
}