import React from 'react'
import Table from 'react-bootstrap/Table'
import ProductRow from './ProductRow'

function ProductTable(props) {
    let products = props.products
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
        {products.map(product => {
            return <ProductRow product={product} key={product.id}/>
        })}
        </tbody>
    </Table>
  )
  
}

export default ProductTable;