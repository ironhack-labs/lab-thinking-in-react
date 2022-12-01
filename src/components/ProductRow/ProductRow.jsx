import { Col, Container, Row } from 'react-bootstrap'
import './ProductRow.css'

const ProductRow = (props) => {

    const { name, price, inStock } = props

    return (
        <Container>
            <Row>
                <Col sm={{ span: 4, offset: 1 }}>
                    {inStock ? <h3>{name}</h3> : <h3 className='red'>{name}</h3>}
                </Col>
                <Col sm={{ span: 4, offset: 2 }}>
                    <h3>{price}</h3>
                </Col>
                <hr />
            </Row>
        </Container >

    )
}

export default ProductRow