import React from 'react';
import ProductRow from './ProductRow';

export default function ProductTable(props) {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Name
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            Price
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        <ProductRow items={props.items} />
      </tbody>
    </table>
  );
}
