import React from 'react';
import ProductRow from './ProductRow'
import {Table} from 'react-bootstrap'

const ProductsTable = ({products}) => {

    return(
        <Table striped bordered hover>
            <thead>
                <tr>
                   <th>Name</th> 
                   <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map((elm, idx) => <ProductRow key = {idx} {...elm} />)}
            </tbody>
        </Table>
    )
}

export default ProductsTable