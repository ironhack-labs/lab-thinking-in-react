import React from 'react';

const ProductRow = (props) => {
  console.log('product row ', { props });

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        {props.products.map((product) =>
          product.inStock 
          ? 
          (
              <tr key={product.id} className="inStock">
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
          ) 
          : 
          (
              <tr key={product.id} className="outOfStock">
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
          )
        )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductRow;
