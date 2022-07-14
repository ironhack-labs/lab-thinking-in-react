import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductRow from './ProductRow/ProductRow'

const ProductTable = ({ products }) => {

    return (
        <Container>
            <Row>
                <Col md={6} >
                    <h2>name</h2>
                </Col>
                <Col md={6} >
                    <h2>Price</h2>
                </Col>
            </Row>

            {
                
                products.map(product => {
                    return (
                        <ProductRow {...product} />
                    )
                })
            }

        </Container>
    )
}

export default ProductTable