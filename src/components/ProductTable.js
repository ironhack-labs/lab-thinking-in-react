import React from 'react'

import { Table } from 'react-bootstrap'

const ProductTable = ({ products }) => {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th className="text-center">name</th>
                    <th className="text-center">Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(elm => <tr key={elm.id}><td className="text-center">{elm.name}</td><td className="text-center">{elm.price}</td></tr>)}
            </tbody>
        </Table>
    )
}

export default ProductTable