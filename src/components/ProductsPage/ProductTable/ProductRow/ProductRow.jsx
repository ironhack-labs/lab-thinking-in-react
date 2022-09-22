import { useState } from 'react'


const ProductRow = ({products}) => {
    // const [data, setData] = useState([])

    return (
      <>
      {products.map((product) => {
        return (
          <tr key={product.id}>
          <td style={{color: product.inStock ? true : "red"}}>{product.name}</td>
          <td>{product.price}</td>
          </tr>

        )

      })
     }
    </>
    )
    
}


export default ProductRow