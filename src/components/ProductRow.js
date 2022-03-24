import React from 'react';
import './../App.css';

export const ProductRow = (props) => {
  const products = props.props;

  return (
    <>
      {products.map((product) => {
        return (
          <tr key={product.id}>
            {product.inStock ? (
              <td>{product.name}</td>
            ) : (
              <td className="product">{product.name}</td>
            )}
            <td>{product.price}</td>
          </tr>
        );
      })}
    </>
  );
};
