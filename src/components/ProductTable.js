import {Col, Row} from 'react-bootstrap'

const ProductTable = props => {
    return (
        <section className="table">
            <Row className="titles">
                <Col sm={6}><p>Name</p></Col>
                <Col sm={6}><p>Price</p></Col>
            </Row>
                {props.products.map((elm, idx) => {
                    return (
                        <>
                        <Row>
                            <Col sm={6} key={idx}>{elm.name}</Col>
                            <Col sm={6} key={elm.id}>{elm.price}</Col>
                        </Row>
                        <hr />
                        </>
                    )
                })}
        </section>
    )
}

export default ProductTable