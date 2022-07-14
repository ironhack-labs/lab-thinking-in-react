import React from 'react'

const ProductRow = props => {
  let p = props.pRowProp

  return (
    <>
        <tr key={p.id}>
          <td>
            <h5>{!p.inStock ? <p className='red'>{p.name} </p>: <p>{p.name} </p>}</h5>
          </td>
          <td>
            <h5> {p.price}</h5>
          </td>
        </tr>
    </>
  )
};

export default ProductRow;