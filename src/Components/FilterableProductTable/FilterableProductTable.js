import React from 'react'
import { Container } from 'react-bootstrap'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'


export default function FilterableProductTable(props) {
     
    return (
        <Container>
         <h1>Ironstore</h1>
         <SearchBar />
            <ProductTable products={props.products} /> 
        </Container>
    )
}

