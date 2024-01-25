import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

import { useState } from 'react';
import jsonData from '../data.json';

//{"category": "Sporting Goods",
// "price": "$9.99",
// "inStock": true,
// "name": "Baseball",
// "id": "4522f16e-3f55-4863-ae36-e935ec9cb4ef"}

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  //   console.log(jsonData);

  return (
    <div id="iron-store">
      <h1 id="ironstore-headline">IronStore</h1>
      <SearchBar
        products={products}
        setProducts={setProducts}
        fullList={jsonData}
      ></SearchBar>
      <ProductTable
        products={products}
        setProducts={setProducts}
      ></ProductTable>
    </div>
  );
}
export default ProductsPage;
