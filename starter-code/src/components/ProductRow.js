import React from 'react';

const ProductRow = ({item}) => (
  <tr>
    <td className={ !item.stocked ? 'out' : null }>
      {item.name}
    </td>
    <td className="price">
      {item.price}
    </td>
  </tr>
);

export default ProductRow;