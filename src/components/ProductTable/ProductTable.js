import React from 'react';
import ProductRow from '../ProductRow/ProductRow';
import './ProductTable.css';

const ProductTable = (props) => {
  const { products } = props; 

  return (
    <div>
      <div className='product-row product-head'>
        <div className='col-left'>Name</div>
        <div className='col-right'>Price</div>
      </div>

      {products.map(e =>
          <div className='product-row' key={e.id}>
            <ProductRow product={e} />
          </div>
        )
      }
    </div>
  )
}

export default ProductTable;
