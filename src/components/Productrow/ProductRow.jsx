import React from 'react';

const ProductRow = ({ newProduct }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className={newProduct.inStock ? ' ' : 'out-of-stock'}>
              {newProduct.name}, {newProduct.inStock}
            </td>
            <td>{newProduct.price}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductRow;
