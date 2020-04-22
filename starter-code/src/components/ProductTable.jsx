import React from 'react';
import ProductHeader from './ProductHeader';
import ProductRow from './ProductRow';
import '../App.css';

const ProductTable = (props) => {
  const { products, state } = props;
  const { search, stocked } = state;

  const match = (product) => {
    if (product.name.toLowerCase().includes(search.toLowerCase())) { return true; }
    return false;
  }

  const stockFilter = (product) => {
    if (stocked && !product.stocked) { return false; }
    return true;
  }

  return (
    <div className='product-table'>
      <ProductHeader />
      {products.map((product, i) => {
        if (match(product) && stockFilter(product)) {
          return <ProductRow key={i + product} product={product} />;
        }
        return null;
      })}
    </div>
  );
}

export default ProductTable;
