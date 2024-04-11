import React from 'react'
import './ProductTable.css'
import ProductRow from './product-row/ProductRow'

function ProductTable(props) {

  const { items } = props
  const categories = [...new Set(items.map(product => product.category))];

  return (
    <table className='ProductTable'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>

          {categories.map((cat) => (
            <>
              <td className='category-name'>{cat}</td>
              
              {items.filter(product => product.category === cat).map((product) => 
              <tr>
                  <ProductRow  key={product.id} name={product.name} price={product.price}></ProductRow>
              </tr>  
                )}
            </>
          ))}
          
        </tbody>

        
    </table>
  )
}

export default ProductTable

