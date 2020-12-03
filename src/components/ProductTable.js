import React from 'react'
import ProductRow from './ProductRow'

export default function ProductTable(props) {
    
    return (
        // <div className="productTable">
            <table>
              <thead>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
              </thead>
              <tbody>
                {
                  props.filterableproducts.map((product) => {
                    return (
                      <ProductRow productrow={product}/>
                    )
                  })
                }
              </tbody>
          </table>
        // </div>
    )
}

