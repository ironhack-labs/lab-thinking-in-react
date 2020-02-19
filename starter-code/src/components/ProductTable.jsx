import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable({ articles }) {
  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
              {articles.map((a, i) => (
                <ProductRow key={i} article={a} />
              ))}
        </tbody>
      </table>
    </div>
  );
}
