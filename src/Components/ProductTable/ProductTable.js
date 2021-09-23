import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductRow from '../ProductRow/ProductRow'


export default function ProductTable(props) {
   
    const displayProducts = () => {
        return props.products.map((prod, i) => (
            <ProductRow key={`${prod.name}-${i}`} products={prod}/>
        ));
      };



    return (
        <Container>
            <Row>
                <Col md={6}>Name</Col>
                <Col md={6}>Price</Col>
            </Row>
            <Row>

                {displayProducts()}

            </Row>
        </Container>
    )
}
