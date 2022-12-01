import { Col, Container, Row } from 'react-bootstrap'
import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css'
import productData from '../../data.json'
import { useState } from 'react'

const ProductsTable = () => {

    const [product, setProduct] = useState(productData)

    return (
        <Container>
            <Row className='col'>
                <Col sm={{ span: 4, offset: 1 }}>
                    <h4>Name</h4>
                </Col>
                <Col sm={{ span: 4, offset: 2 }}>
                    <h4>Price</h4>
                </Col>
            </Row>

            {product.map(elm => {
                return <ProductRow key={elm.id} {...elm} />
            })}

        </Container >
    )
}

export default ProductsTable