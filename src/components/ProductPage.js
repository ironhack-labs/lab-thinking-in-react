import React, { useState } from 'react';

import jsonData from '../data.json';

function ProductPage() {
  const [products, setProducts] = useState(jsonData);

  return (
    <div>
      <h1>Iron Store</h1>
    </div>
  );
}

export default ProductPage;
