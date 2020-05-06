import React from 'react'

function ProductRow(props) {
  return (
    <React.Fragment>
      {props.products.map((product, index) => (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      ))}
    </React.Fragment>
  )
}

export default ProductRow
