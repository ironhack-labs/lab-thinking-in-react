import React from 'react';
// import './ProductRow.css'

const ProductRow = (props) => {
  const { products, inStock } = props;

  const row = () => {};

  console.log(inStock);
  return (
    <div className="ProductRow">
      {products.map((product) => {
        return (
            (!inStock || product.stocked) && (<tr key={product.id}>
            <td style={{ color: product.stocked ? '' : 'red' }}>
              {product.name}
            </td>
            <td>{product.price}</td>
          </tr>)
        );
      })}
    </div>
  );
};

export default ProductRow;
