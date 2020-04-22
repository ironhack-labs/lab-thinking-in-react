import React from 'react';
import ProductHeader from './ProductHeader';
import ProductRow from './ProductRow';
import '../App.css';

const ProductTable = (props) => {
  const { products, search } = props;
  return (
    <div className='product-table'>
      <ProductHeader />
      {products.map((product, i) => {
        if (match(search, product.name)) {
          return <ProductRow key={i + product} product={product} />;
        }
        return null;
      })}
    </div>
  );
}

const match = (search, name) => {
  if (name.toLowerCase().includes(search.toLowerCase())) {
    return true;
  }
  return false;
}

export default ProductTable;
