import { Container, Row, Col } from 'react-bootstrap'
import ProductRow from '../productRow/ProductRow'
import './ProductTable.css'

const ProductsTable = ({theProducts}) => {


    return (
        <Container>
            <Row className='productColumn'>
                <Col>Name</Col>
                
                <Col>Price</Col>

            </Row>
            <ProductRow theProducts={theProducts}></ProductRow>
        </Container>

    )
}

export default ProductsTable