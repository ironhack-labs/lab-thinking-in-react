import React from 'react'
import ProductRow from './ProductRow'

import Table from 'react-bootstrap/Table';

const ProductTable = props => {


    return (

        <>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                </thead>
                <tbody>
                    {props.products.map((elm, idx) => <ProductRow key={idx} {...elm} />)}
                </tbody>
            </Table>


        </>
    )
}

export default ProductTable