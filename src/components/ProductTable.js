import React from 'react'
import {Table} from 'react-bootstrap'
import ProductRow from './ProductRow'

function ProductTable(props) {
    const rows = props.products.map(product => <ProductRow key={ props.products.indexOf(product)} name={product.name} price={product.price} stocked={product.stocked}/>)
    return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </Table>
    )
}

export default ProductTable
