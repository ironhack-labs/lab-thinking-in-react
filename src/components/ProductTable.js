import React from 'react'
import Table from 'react-bootstrap'

const ProductTable = props => {

    return (

    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>

            {props.product.map((product) => {
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>

            })}
            
        </tbody>
    </Table>

    )
}

export default ProductTable