import React from 'react'

const ProductRow = (props) => {

    console.log('product row ', {props})

  return (
    <div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {props.products.map((product) => (
            (product.inStock 
            ?
          <tbody key={product.id} className='inStock'>
            <tr>
              <td>
                {product.name}
              </td>
              <td>
                {product.price}
              </td>

            </tr>
          </tbody>
          : 
          <tbody key={product.id} className='outOfStock'>
            <tr>
              <td>
                {product.name}
              </td>
              <td>
                {product.price}
              </td>

            </tr>
          </tbody>)
        ))}
      </table>

    </div>
  )
}

export default ProductRow