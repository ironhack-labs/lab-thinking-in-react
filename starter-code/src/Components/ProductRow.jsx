import React from 'react';
const shortid = require('shortid');

const ProductRow = (product) => (
  <tr>
    {Object.values(product).map((field) => (
      <td key={shortid.generate()}>{field}</td>
    ))}
  </tr>
);
export default ProductRow;
