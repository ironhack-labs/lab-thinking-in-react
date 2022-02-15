import React from 'react';

export default function ProductRow(props) {
  return props.items.map((item) => {
    let col;
    item.inStock ? (col = { color: 'black' }) : (col = { color: 'red' });
    return (
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div style={col} className="text-left text-sm text-gray-900">
            {item.name}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div style={col} className="text-left text-sm text-gray-900">
            {item.price}
          </div>
        </td>
      </tr>
    );
  });
}
