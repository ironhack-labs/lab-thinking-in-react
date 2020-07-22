import React from 'react'
import ProductRow from './ProductRow';
import Table from 'react-bootstrap/Table';

const ProductTable = props => {

    const productsList = props.products
        .filter(prod => props.showOnlyOnStock ? prod.stocked : prod)
        .map(prod => <ProductRow key={prod.name} product={prod}></ProductRow>)

    return (
        <Table striped bordered hover>
            <tbody>
                {productsList}
            </tbody>
        </Table>
    )
}

export default ProductTable