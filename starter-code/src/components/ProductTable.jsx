import React from 'react';
import ProductHeader from './ProductHeader';
import ProductRow from './ProductRow';
import '../App.css';

const ProductTable = (props) => {
  const { products } = props;
  console.log('products', products);
  return (
    <div className='product-table'>
      <ProductHeader />
      {products.map((product, index) => {
        return <ProductRow key={index + product} product={product} />
      })}
    </div>
  );
}

export default ProductTable;
