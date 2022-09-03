import { useState } from 'react';
import jsonData from '../data.json';

function ProductTable() {
  const [productTable, setProductTable] = useState(jsonData);

  return (
    <div>
      <h1>ProductTable</h1>
    </div>
  );
}

export default ProductTable;
