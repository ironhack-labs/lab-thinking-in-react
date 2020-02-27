import React from 'react';
import ProductRow from './productRow'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const ProductTable = props => {

    return (
        <Container>


            <Row className="mt-5 mx-5 px-5 bg-info">

                <Col md={6} className="my-3">

                    <h2>Name</h2>

                </Col>

                <Col md={6} className="my-3">

                    <h2>Price</h2>

                </Col>
            </Row>

            <Row className="mx-5 px-5 border">

                {props.products.map((elm, idx) => <ProductRow key={idx} {...elm} className="border" />)}

            </Row>

        </Container>
    )

}

export default ProductTable