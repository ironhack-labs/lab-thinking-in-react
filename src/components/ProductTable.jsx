import React from 'react'
import ProductRow from './ProductRow'
import "../App.css";

const ProductTable = ({products}) => {
  const productTable = <table>
 <thead className='table'>
            <th>Name</th>
            <th>Price</th>
        </thead>
        <ProductRow {...products}/>
    </table>
    return (
        <div className='table-conteiner'>{productTable}</div>
    )
  
}

export default ProductTable
