import React from 'react'

function ProductRow(props) {
    const {category, price, inStock, name, id} = props.products
    const textColor = inStock ? 'black' : 'red'

  return (
    <tr style = {{color: textColor}}>
    <td>{name}</td>
    <td>{price}</td>
    </tr>
  )
}

export default ProductRow