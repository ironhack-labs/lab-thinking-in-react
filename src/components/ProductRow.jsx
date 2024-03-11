import React from 'react'
import "../App.css";

const ProductRow = ({ product }) => {

  return (
    <tbody>
            {product.products.map((prod, index) => (
                <tr key={index}>
                    <td style={{ color: prod.inStock ? 'inherit' : 'red' }}>{prod.name}</td>
                    <td>{prod.price}</td>
                </tr>
            ))}
        </tbody>
  )
 

}

export default ProductRow
