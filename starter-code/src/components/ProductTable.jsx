import React from 'react';
import ProductHeader from './ProductHeader';
import ProductRow from './ProductRow';
import '../App.css';

const ProductTable = (props) => {
  const { products, search } = props;
  console.log('products', products);
  return (
    <div className='product-table'>
      <ProductHeader />
      {products.map((product, index) => {
        if (searchMatch(search, product.name)) {
          return <ProductRow key={index + product} product={product} />
        }
        return null;
      })}
    </div>
  );
}

const searchMatch = (search, name) => {
  if (name.toLowerCase().includes(search.toLowerCase())) {
    return true;
  }
  return false;
}

export default ProductTable;
