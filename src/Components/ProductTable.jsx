import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({productList}) => {
  return (
    <div className="section-container">
      <article className="product-box header">
        <p className="list-header">NAME</p>
        <p className="list-header">PRICE</p>
      </article>

      {
        productList.map((productItem, index) => {
          return <ProductRow key={index} {...productItem}/>
        })
      }     

    </div>
  )
}

export default ProductTable;
