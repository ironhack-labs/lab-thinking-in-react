import React from 'react'
import ProductRow from './ProductRow'


  function ProductTable(props) {

    console.log(props.products)
    return (
      <div>
      <table className='tableProducts'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody> {props.products.map(product => (
      <ProductRow key={product.id} product={product}/>
       ))}
    </tbody>
      </table>
      </div>
    );

  }


export default ProductTable