import React from 'react';

export default function ProductTable({ products, onDelete }) {
  return (
    <div>
      <table className="tg">
        <thead>
          <tr>
            <th className="tg-0lax">Name</th>
            <th className="tg-0lax">Price</th>
            <th className="tg-0lax">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className={`tg-0lax ${!product.inStock ? 'red' : ''}`}>
                {product.name}
              </td>
              <td className={`tg-0lax ${!product.inStock ? 'red' : ''}`}>
                {product.price}
              </td>
              <td className="tg-0lax">
                <button
                  onClick={() => onDelete(product.id)}
                  className="btn-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
