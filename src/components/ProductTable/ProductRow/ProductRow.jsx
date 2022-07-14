import { Row, Col } from 'react-bootstrap'

const ProductRow = ({ name, price, inStock }) => {

    let color = {

        color: "red"
    }

    return (
        <>
            <Row>
                <Col md={6}>
                    {inStock ?
                        <p style={color} >{name}</p>
                        :
                        <p>{name}</p>
                    }
                </Col>
                <Col md={6}>
                    {price}
                </Col>
            </Row>
        </>
    )
}

export default ProductRow