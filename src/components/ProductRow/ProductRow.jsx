import './ProductRow.css'
import { Row, Col, Container, Button } from "react-bootstrap"

const ProductRow = ({ name, price, inStock, id, category }) => {

    const color = inStock ? "name-black" : "name-red"

    return (

        <Row className='card flex-row pt-4' >

            <Col md={{ span: 6 }}>
                <p className={color}>{name}</p>
            </Col>

            <Col md={{ span: 6 }}>
                <p>{price}</p>
            </Col>

        </Row>


    )

}

export default ProductRow