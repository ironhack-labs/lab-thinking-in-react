import React from 'react';

export default function ProductTable({ children }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
