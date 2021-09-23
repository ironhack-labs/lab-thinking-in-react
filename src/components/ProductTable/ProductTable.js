import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductRow from '../ProductRow/ProductRow'
export default function ProductTable({ product }) {


    const displayProducts = () => {
        return (
            product.map((elem) => {
                return (
                    <ProductRow eachProduct={elem} />
                )
            })
        )

    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs={6}>
                        <h2>Name</h2>
                    </Col>
                    <Col xs={6}>
                        <h2>Price</h2>
                    </Col>
                </Row>
                {displayProducts()}
            </Container>

        </div>
    )
}
