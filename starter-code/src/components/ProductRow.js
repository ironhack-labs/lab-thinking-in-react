import React from 'react'
import { Mycontext } from '../context/index'

export default function ProductRow() {
  return (
    <Mycontext.Consumer>
      {({ products }) => (
        <tbody>
          {products.map((product, i) => (
            <tr key={i}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      )}
    </Mycontext.Consumer>
  )
}
