import React from 'react'

export default function ProductRow(props) {
    const {products: {price, inStock, name}} = props; 

  return (<>
  <tr>
        <td>
            {inStock ? <p>{name}</p> : <p style={{"color":"red"}}>{name}</p>}
        </td>
        <td className='price'>
            {price}
        </td>

    </tr>
        </>
  )
}
