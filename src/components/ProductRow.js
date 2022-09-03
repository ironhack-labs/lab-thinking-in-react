import { useState } from 'react';
import jsonData from '../data.json';

function ProductRow(props) {
  const [productRow, setProductRow] = useState(jsonData);

  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
