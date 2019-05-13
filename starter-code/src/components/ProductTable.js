import React from 'react'
import { Table } from 'react-bootstrap'
import { Mycontext } from '../context'
import ProductRow from './ProductRow'

const ProductTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Mycontext.Consumer>
          {
            ({products}) => products.map((product, i) => <ProductRow key={i} {...product} i={i + 1} />)
          }
        </Mycontext.Consumer>
      </tbody>
    </Table>
  )
}

export default ProductTable
