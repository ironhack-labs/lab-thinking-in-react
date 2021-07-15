import React from 'react';
import './ProductCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';



const ProductCard = ({ price, name }) => {
    return (
        <>
            <Card>
                <Card.Body> <p>  {name} {price}</p> </Card.Body>
            </Card>
        </>
    )
}


export default ProductCard