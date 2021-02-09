import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const productList = props.productList.map((product) => {
      return (      
          <ProductRow
            key={product.id}
            product={product}
            />
      )
});

return productList;
}
