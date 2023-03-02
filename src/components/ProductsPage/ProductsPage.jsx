import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import productsJSON from '../../data.json'
import ProductTable from '../ProductTable/ProductTable'
import SearchBar from '../SearchBar/SearchBar'

const ProductPage = () => {

    const [products, setProducts] = useState(productsJSON)
    const [productsFiltered, setproductsFiltered] = useState(productsJSON)
    const [inStock, setInStock] = useState(false)

    const filterProducts = (text) => {
        const productsCopy = [...products]
        const filterResult = productsCopy.filter(product => {

            const productName = product.name.toLowerCase()

            if (productName.startsWith(text.toLowerCase()))






                if (inStock && product.inStock) return product
                else if (!inStock) return product
        })

        setproductsFiltered(filterResult)
    }

    const stockProducts = (status) => {
        setInStock(status)
        if (!productsFiltered.length) setproductsFiltered(products)
        else {
            const productsCopy = [...productsFiltered]
            const filterResult = productsCopy.filter(products => status ? products.inStock : products)

            setproductsFiltered(filterResult)
        }

    }
    return (
        <Container>
            <Row>
                <Col className='mt-5' md={{ span: 6, offset: 3 }}>
                    <h1>Amazon Cart</h1>
                    <hr />
                    <SearchBar filterProducts={filterProducts} stockProducts={stockProducts} ></SearchBar>
                    <ProductTable products={productsFiltered.length ? productsFiltered : products}></ProductTable>
                </Col>
            </Row>

        </Container>
    )
}

export default ProductPage