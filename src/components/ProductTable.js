import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    const filtered = props.products.filter(
        product => product.name.toLowerCase().includes(props.query.toLowerCase())
    )
    
    return (
        <div className="productTable">
            <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                {
                  filtered.map(product => {
                    return (
                     <ProductRow product={product}/>
                    )
                  })
                }
              </tbody>
          </table>
        </div>
    )
}

