import React from 'react';

export default function ProductTable({products}) {
    
  return (
    <div className="productTable">
      <table>
        <thead>
          <th>Name</th>
          <th>Price</th>
        </thead>
        <tbody>
            <tr>
              <td>{products.name}</td>
              <td>{products.price}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
