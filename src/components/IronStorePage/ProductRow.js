import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './ProductRow.css'




const ProductRow = ({ name, category, stocked, price }) => {


    return (
        <>
            <Row className="row-in-list" style={stocked ? { fontSize:'1.5em', color: 'green' } : { color: 'red' }} >
                <Col variant="col-4"> {name}</Col>
                <Col variant="col-4"> {category}</Col>
                <Col variant="col-4"> {price}</Col>


            </Row>
        </>
    )
}



export default ProductRow