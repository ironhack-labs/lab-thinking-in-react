// src/components/ProductsPage.js

import { useState } from 'react';
import ProductTable from '../components/ProductTable/ProductTable';
import SearchBar from '../components/SearchBar/SearchBar';
import jsonData from './../data.json';
import { Col, Container, Row } from 'react-bootstrap'

function ProductsPage() {
    const [products, setProducts] = useState(jsonData)
    const [productsBackup, setProductsBackup] = useState(jsonData)

    const filterProducts = filter => {
        if (filter === "") {
            setProducts(productsBackup)

        } else {
            const filteredProducts = productsBackup.filter(elm => elm.name.startsWith(filter))
            setProducts(filteredProducts)
        }
    }

    const filterStock = (hasStock, filter) => {
        if (!hasStock) {
            const stockProducts = productsBackup.filter(elm => elm.inStock === true && elm.name.startsWith(filter))
            setProducts(stockProducts)
        } else {
            setProducts(productsBackup)
        }
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Row >
                        <Col md={{ span: 6, offset: 3 }}>
                            <h1>IronStore</h1>
                            <SearchBar filterProducts={filterProducts} filterStock={filterStock} />
                        </ Col>
                    </Row>
                    <ProductTable products={products} />
                </ Col>
            </Row>


        </Container >

    )
}

export default ProductsPage