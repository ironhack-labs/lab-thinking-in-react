import React from 'react';

function ProductRow(props) {
  return (
    <tbody>
    {props.gridData.map(data => <tr>
        <td>{data.name}</td>
        <td>{data.price}</td>
      </tr>)}
      
    </tbody>
  );
}

export default ProductRow;
