import React from 'react';

// Color = color => {
//   const copy = [...this.state.colors];

//   if (product <= 0) {
//     this.setState({ colors: copy });
//   }
// };
export default function ProductRow({ products }) {
  return (
    <div>
      {products.data.map(c => (
        <tr>
          <td>{c.name}</td>
          <td>{c.price}</td>
        </tr>
      ))}
    </div>
  );
}
