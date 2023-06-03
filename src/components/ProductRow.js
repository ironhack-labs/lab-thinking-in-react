import { useState } from 'react';

function ProductRow(products) {
  

  const productos = products.products.products;
  return (
    <div className="data">
      <table>
        {productos.map((product) => {
          return (
            <tr>
              {product.inStock ? (
                <td>{product.name}</td>
              ) : (
                <td>{product.name}</td>
              )}

              <td>{product.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ProductRow;