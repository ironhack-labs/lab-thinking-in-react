import React from 'react';
import Col from 'react-bootstrap/Col'

const ProductRow = props => {

    return (
        <>

            <Col md={6} className="my-3">

                <p>{props.name}</p>

            </Col>

            <Col md={6} className="my-3">

                <p>{props.price}</p>

            </Col>

        </>

    )

}

export default ProductRow;

